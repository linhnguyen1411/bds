class CreateProductDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :product_details do |t|
      t.integer :product_id
      t.text :details

      t.timestamps
    end
  end
end
