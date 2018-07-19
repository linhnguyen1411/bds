class CreateCategoryDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :category_details do |t|
      t.string :name
      t.integer :parent_id
      t.integer :category_id

      t.timestamps
    end
  end
end
