class IngredientsController < ApplicationController
  def index
    ingredients = Ingredient.all
    render json: ingredients
  end

  def show
    ingredient = Ingredient.find_by(id: params[:id])
    dishes = ingredient.dishes
    render json: ingredient, include: [:dishes]
  end

  def create
    ing = Ingredient.new(ing_params)
    if ing.save
      render json: ing, include: [:dishes]
    else
      render json: { error: "not created" }, status: :not_created
    end
  end

  def destroy
    ing = Ingredient.find_by(id: params[:id])
    ing.destroy
    render json: { message: "Deleted" }, status: :no_content
  end

  private

  def ing_params
    params.require(:ingredient).permit(:name)
  end
end
