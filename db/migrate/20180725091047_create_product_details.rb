class CreateProductDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :product_details do |t|
      t.integer :product_id
      t.integer :ward_id
      t.string :address
      t.integer :facade
      t.integer :bedroom
      t.integer :toilet
      t.integer :livingroom
      t.integer :kitchen
      t.integer :furniture
      t.integer :floor

      t.timestamps
    end
  end
end
