class Api::ServersController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]
  
  def index
    @servers = Server.all

    render :index
  end

  def show
    
    if Server.find(params[:id])
      @server = Server.find(params[:id])
      render :show
    else
      render json: ['No server found'], status: 404
    end
  end

  def create
    @server = current_user.created_servers.new(server_params)

    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = current_user.created_servers.find(params[:id])
    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = current_user.created_servers.find(params[:id])

    @server.destroy
    render :show
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
