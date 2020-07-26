class TweetsController < ApplicationController
  def show
    @tweet = Tweet.all
    render json: @tweet
  end

  def create
    @tweet = Tweet.create!(sentence: params[:sentence], user_name: params[:user_name])
    render json: @tweet
  end

  def update
    @tweet = Tweet.find(params[:id])
    @tweet.update_attributes(sentence: params[:sentence])
    render json: @tweet
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    if @tweet.destroy
      head :no_content, status: :ok
    else
      render json: @tweet.errors, status: :unprocessable_entity
    end
  end
end
