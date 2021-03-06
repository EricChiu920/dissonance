class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.includes(:servers).find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
