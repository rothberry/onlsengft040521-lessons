class CoffeesController < ApplicationController

  # INDEX
  # Goal for the index route is to retrieve ALL the instances of Coffee in our DB
  def index
    coffees = Coffee.all
    render json: coffees
  end

  # SHOW
  # Goal is to use the params of an id given from the url to find that instance in the db
  def show
    coffee = Coffee.find_by(id: params[:id])
    if coffee
      render json: coffee
    else
      render json: { error: "Could not find coffee with that id" }
    end
  end

  # CREATE
  # Goal make a new instance of Coffee and render the new instance as json
  def create
    # coffee = Coffee.new
    # coffee.name = params[:name]
    # coffee.company = params[:company]
    # coffee.whole_bean = params[:whole_bean]

    # coffee = Coffee.new(name: params[:name]...)
    # coffee = Coffee.create(name: params[:name], company: params[:company], whole_bean: params[:whole_bean])
    # coffee = Coffee.new(name: params[:name], company: params[:company], whole_bean: params[:whole_bean])
    coffee = Coffee.new(coffee_params)
    if coffee.save
      render json: coffee, status: :created
    else
      render json: { message: "invalid form" }, status: :bad_request
    end
  end

  # strong params
  private

  def coffee_params
    # permit the params hash to only allow what we want for the instance
    # require our model
    # permit all of the columns/keys from the params hash
    params.require(:coffee).permit(:name, :company, :whole_bean)
  end
end
