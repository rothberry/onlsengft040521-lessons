class InstrumentsController < ApplicationController
  before_action :set_instrument, only: [:show]

  def index
    instruments = Instrument.all
    render json: instruments
  end

  def show
  end

  def create
    # make new instance
    # check validity
    # then save to db, and  render json
    instrument = Instrument.new(instrument_params)

    if instrument.valid?
      instrument.save
      render json: instrument, status: :created
    else
      render json: instrument.errors.full_messages, status: :bad_request
    end
  end

  private

  def set_instrument
    @instrument = Instrument.find_by(id: params[:id])
  end

  def instrument_params
    params.require(:instrument).permit(:name, :section, :rating)
  end
end
