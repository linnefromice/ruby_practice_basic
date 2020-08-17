class UsersController < ApplicationController
  def sign_up
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 400
    end
  end

  def sign_in
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: { errors: ["Sign-in Failed ..."] }, status: 401
    end
  end

  def show
    @user = User.all
    render json: @user
  end

  private
  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
