class Api::MessagesController < ApplicationController
  before_action :ensure_logged_in

  def create
    @message = current_user.messages.new(message_params)

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = current_user.messages.find(params[:id])

    if @message.update(message_params)
      render :show
    else
      render json: @message_params.error.full_messages, status: 422
    end
  end

  def destroy
    @message = current_user.messages.find(params[:id])

    @message.destroy
    render :show
  end

  private
  def message_params
    params.require(:message).permit(:body, :channel_id, :edited)
  end
end
