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
    if params[:user_id]
      @users = User.find(params[:user_id])
    else
      @users = User.all
    end
    render json: @users
  end

  def detail
    if params[:id]
      @user = User.find(params[:id])
      render json: {
          id: @user.id,
          name: @user.name,
          email: @user.email,
          following: @user.following.ids,
          followers: @user.followers.ids
      }
    else
      render json: { errors: ["Get details Failed ..."] }, status: 400
    end
  end

  private
  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
