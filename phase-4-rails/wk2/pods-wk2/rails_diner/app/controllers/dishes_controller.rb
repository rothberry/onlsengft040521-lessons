class DishesController < ApplicationController
  def index
    dishes = Dish.all
    render json: dishes, include: [:ingredients]
  end

  def show
    dish = Dish.find_by(id: params[:id])
    render json: dish, include: [:ingredients]
  end

  def create
    dish = Dish.new(dish_params)
    # if dish.save
    #   render json: dish, status: :created
    # else
    # render json: {error: "Not Valid"}, status: :not_created
    # end

    if dish.save
      if !params[:ingredients].empty?
        params[:ingredients].each do |ing|
          # if Ingredient.find_by(name: ing[:name])
          found_ing = Ingredient.find_by(name: ing)
          if found_ing
            dish.dish_ingredients.create(ingredient_id: found_ing.id)
          else
            dish.ingredients.create(name: ing["name"])
          end
        end
      end
      render json: dish, include: [:ingredients]
    else
      render json: { error: "Not Valid" }, status: :not_created
    end
  end

  def update
    dish = Dish.find_by(id: params[:id])
    dish.update(dish_params)
    render json: dish, include: [:ingredients]
  end

  def destroy
    dish = Dish.find_by(id: params[:id])
    dish.destroy
    render json: { message: "Deleted" }, status: :no_content
  end

  private

  def set_dish
    @dish = Dish.find_by(id: params[:id])
  end

  def dish_params
    params.require(:dish).permit(:name)
  end
end
