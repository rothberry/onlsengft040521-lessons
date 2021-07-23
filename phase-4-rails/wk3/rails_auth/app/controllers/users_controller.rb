class UsersController < ApplicationController

  # Signup => user#create
  def create
    # make a new instance of user
    user = User.new(user_params)
    # user = User.new(email: params[:email], password: params[:password])
    # test if valid
    if user.save
      # set current user
      session[:user_id] = user.id
      # render json
      render json: user, status: :created
    else
      render json: { error: "Not Created" }, status: :not_created
    end
  end

  # Profile => user#show current user
  def me
    user = User.find_by(id: session[:user_id])
    p "***SESSION***"
    p session
    p session[:user_id]
    if user
      render json: user
    else
      render json: { message: "Not Logged In" }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
