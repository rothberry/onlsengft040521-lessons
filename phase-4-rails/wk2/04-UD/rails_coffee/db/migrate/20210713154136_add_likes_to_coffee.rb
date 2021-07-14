class AddLikesToCoffee < ActiveRecord::Migration[6.1]
  def change
    add_column :coffees, :likes, :integer, default: 0
  end
end
