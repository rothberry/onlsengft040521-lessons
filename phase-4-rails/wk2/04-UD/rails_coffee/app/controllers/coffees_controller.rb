class CoffeesController < ApplicationController
  before_action :set_coffee, only: [:show, :update, :destroy, :add_likes]

  def index
    coffees = Coffee.all
    render json: coffees
  end

  def show
    # coffee = Coffee.find_by(id: params[:id])
    # coffee = set_coffee
    # set_coffee
    if @coffee
      render json: @coffee
    else
      render_not_found
    end
  end

  def create
    coffee = Coffee.new(coffee_params)
    if coffee.save
      render json: coffee, status: :created
    else
      render json: { error: "invalid form" }, status: :bad_request
    end
  end

  # ? UPDATE
  def update
    # coffee = Coffee.find_by(id: params[:id])
    # set_coffee
    if @coffee
      @coffee.update(coffee_params)
      render json: @coffee, status: :ok
    else
      # render json: { error: "Invalid form" }, status: :bad_request
      render_not_found
    end
  end

  # ? DELETE
  def destroy
    # coffee = Coffee.find_by(id: params[:id])
    # set_coffee
    if @coffee
      @coffee.destroy
      # head :no_content
      render json: { message: "Delete Successful" }, status: :ok
      # render json: @coffee
    else
      render_not_found
    end
  end

  # ? Likes
  def add_likes
    # find our coffee, increase the likes by 1, return new coffee
    # coffee = Coffee.find_by(id: params[:id])
    # set_coffee
    if @coffee.update({ likes: @scoffee["likes"] + 1 })
      render json: @coffee, status: :ok
    else
      render json: { error: "Invalid form" }, status: :bad_request
    end
  end

  private

  def set_coffee
    @coffee = Coffee.find_by(id: params[:id])
  end

  def coffee_params
    params.require(:coffee).permit(:name, :company, :whole_bean)
  end

  def render_not_found
    render json: { error: "Could not find coffee with that id" }, status: :not_found
  end
end
