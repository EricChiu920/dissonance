class Api::ServersController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]
  
  def index
    @servers = Server.all

    render :index
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = current_user.created_servers.new(server_params)

    if @server.save
      render :show
    else
      render @server.errors.full_messages
    end
  end

  def update
    @server = current_user.created_servers.find(params[:id])
    if @server.update(server_params)
      render :show
    else
      render @server.errors.full_messages
    end
  end

  def destroy
    @server = current_user.created_servers.find(params[:id])

    if @server
      @server.destroy

      render json: {}
    else
      render json: ["Server does not exist"]
    end
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
