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
    p "*******INST CREATE*********"
    user = User.find_by(id: session[:user_id])
    instrument = user.instruments.build(instrument_params)
    if instrument.save
      render json: instrument, status: :created
    else
      render json: {error: "Not Created"}, status: :not_created
    end
  end

  private
  def instrument_params
    params.permit(:name, :section, :rating)
  end

end
