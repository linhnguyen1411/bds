class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.integer :user_id
      t.integer :product_type_id
      t.integer :category_id
      t.string :title
      t.text :description
      t.integer :status
      t.string :price
      t.float :acreage
      t.integer :province_id
      t.integer :district_id
      t.integer :ward_id
      t.string :number
      t.string :street
      t.float :road_width
      t.integer :certificate
      t.datetime :expiration_date
      t.integer :unit, default: 0

      t.timestamps
    end
  end
end
