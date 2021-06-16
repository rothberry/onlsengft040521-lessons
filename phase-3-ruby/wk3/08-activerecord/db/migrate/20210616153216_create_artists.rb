class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    # creating our artists table
    create_table :artists do |t|
      # columns
      # t.column_type :column_name, validation
      t.string  :name

      t.timestamps
    end
  end
end
