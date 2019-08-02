class Api::ServersController < ApplicationController
  before_action :ensure_logged_in
  
  def index
    @servers = Server.all

    render :index
  end

  def show
    @server = Server.find(params[:server][:id])
    render :show
  end

  def create
    @server = current_user.servers.new(server_params)

    if @server.save
      render :show
    else
      render @server.errors.full_messages
    end
  end

  def update
    @server = current_user.servers.find(params[:server][:id])

    if @server.update(server_params)
      render :show
    else
      render @server.errors.full_messages
    end
  end

  def destroy
    @server = current_user.servers.find(params[:server][:id])

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
