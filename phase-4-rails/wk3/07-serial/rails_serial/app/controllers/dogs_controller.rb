class DogsController < ApplicationController
  before_action :set_dog, only: [:show]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def index
    render json: Dog.all
  end

  def show
    render json: @dog
  end

  private

  def set_dog
    @dog = Dog.find(params[:id])
  end

  def render_not_found
    render json: { error: "Dog not found" }, status: :not_found
  end
end
