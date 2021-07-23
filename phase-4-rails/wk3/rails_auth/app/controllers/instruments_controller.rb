class InstrumentsController < ApplicationController

  # INDEX gets all instruments that relate to our current user
  def index
    p "*******INST INDEX*********"
    p session
    user = User.find_by(id: session[:user_id])

    instruments = user.instruments
    render json: instruments
  end

  # create an instrument through our currrent user
  def create
  end
end
