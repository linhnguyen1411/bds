class CreateProductExtensions < ActiveRecord::Migration[5.1]
  def change
    create_table :product_extensions do |t|
      t.integer :product_id
      t.boolean :terrace
      t.boolean :waterfront
      t.string :view
      t.integer :garage
      t.integer :pool

      t.timestamps
    end
  end
end
