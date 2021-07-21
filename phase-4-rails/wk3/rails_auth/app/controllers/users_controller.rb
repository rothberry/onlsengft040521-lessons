class UsersController < ApplicationController

  # Signup => user#create

  def create
    # make a new instance of user
    user = User.new(email: params[:email], password: params[:password])
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

end
