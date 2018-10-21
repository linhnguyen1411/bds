class CreateProductExtensions < ActiveRecord::Migration[5.1]
  def change
    create_table :product_extensions do |t|
      t.integer :product_id
      t.text :extensions

      t.timestamps
    end
  end
end
