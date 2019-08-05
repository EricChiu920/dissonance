class Api::UserServersController < ApplicationController
  def create
    @user_server = current_user.user_servers.new
    @user_server.server_id = params[:server][:id]

    if @user_server.save
      render :show
    else
      render json: @user_server.errors.full_messages
    end
  end

  def destroy
    @user_server = current_user.user_servers.find_by(server_id: params[:id])

    if @user_server
      @user_server.destroy
      render :show
    else
      render json: ['You have not joined this server']
    end
  end
end
