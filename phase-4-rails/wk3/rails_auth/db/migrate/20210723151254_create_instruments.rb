class CreateInstruments < ActiveRecord::Migration[6.1]
  def change
    create_table :instruments do |t|
      t.string :name
      t.string :section
      t.integer :rating
      t.integer :user_id

      t.timestamps
    end
  end
end
