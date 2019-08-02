class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(:servers).find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render :show
    else
      render json: ['Invalid email/password'], status: 404
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['There was no logged in user'], status: 404
    end
  end
end
