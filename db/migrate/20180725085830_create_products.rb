class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.integer :category_id
      t.integer :user_id
      t.integer :status
      t.float :price, :double
      t.float :acreage
      t.datetime :expiration_date
      t.integer :type

      t.timestamps
    end
  end
end
