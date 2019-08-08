class Api::ChannelsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def show
    @channel = Channel.includes(:messages, :message_authors).find(params[:id])

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
    @channel = current_user.created_servers.find(params[:channel][:server_id]).channels.find(params[:id])

    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = current_user.created_servers.find(params[:channel][:serverId]).channels.find(params[:channel][:channelId])

    if @channel
      @channel.destroy

      render :show
    else
      render json: ["Couldn't find that channel"], status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name)
  end
end
