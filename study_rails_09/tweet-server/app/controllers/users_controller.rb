class UsersController < ApplicationController
  def sign_up
  end

  def sign_in
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      render json: { errors: ["Login Failed ..."] }, status: 401
    end
  end
end
