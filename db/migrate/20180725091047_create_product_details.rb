class CreateProductDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :product_details do |t|
      t.integer :product_id
      t.integer :bedroom
      t.integer :toilet
      t.integer :livingroom
      t.integer :kitchen
      t.boolean :furniture
      t.integer :floor
      t.float :floor_area
      t.string :built_in
      t.timestamps
    end
  end
end
