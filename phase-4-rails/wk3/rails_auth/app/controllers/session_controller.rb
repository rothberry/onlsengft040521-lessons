class SessionController < ApplicationController

  # Login => creating a session session#create
  def login
    # find the user
    found_user = User.find_by(email: params[:email])
    # if we find a user AND their password is authenticated, then we will log them in (create a session for them)
    if found_user && found_user.authenticate(params[:password])
      # Actual point of login
      session[:user_id] = found_user.id
      # Send only the data we need to confirm that the user has successfully logged in
      render json: found_user, status: :accepted
    else
      render json: { error: "Invalid Email or password" }, status: :unauthorized
    end
  end

  # Logout => destroying the session session#destroy
  def logout
    # delete the session
    session.clear
    render json: { message: "Logged Out" }
  end
end
