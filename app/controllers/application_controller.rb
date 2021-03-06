class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.includes(servers: :channels).find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    unless current_user
      render json: ['invalid credentials'], status: 401
    end
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
