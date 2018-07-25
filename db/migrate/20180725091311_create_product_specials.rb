class CreateProductSpecials < ActiveRecord::Migration[5.1]
  def change
    create_table :product_specials do |t|
      t.integer :product_id
      t.integer :pool
      t.integer :gara

      t.timestamps
    end
  end
end
