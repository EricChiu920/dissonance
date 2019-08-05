class Api::ChannelsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def show
    @channel = current_user.servers.channels.find(params[:id])

    render :show
  end

  def create
    @channel = current_user.created_servers.find(params[:channel][:server_id]).channels.new(channel_params)

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = current_user.created_servers.find(params[:channel][:server_id]).channels.new(channel_params)

    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = current_user.created_servers.find(params[:channel][:server_id]).channels.new(channel_params)
  end

  private
  def channel_params
    params.require(:channel).permit(:name)
  end
end
