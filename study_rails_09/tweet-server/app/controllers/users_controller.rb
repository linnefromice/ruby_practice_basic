class UsersController < ApplicationController
  def sign_up
    if params[:name] != "" && params[:email] != "" && params[:password] != ""
      @user = User.create({name: params[:name], email: params[:email], password: params[:password]})
      if @user
        render json: @user
      else
        render json: { errors: ["Sign-up Failed ..."] }, status: 401
      end
    else
      render json: { errors: ["Sign-up Failed ..."] }, status: 401
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
end
