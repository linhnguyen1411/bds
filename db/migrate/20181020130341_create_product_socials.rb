class CreateProductSocials < ActiveRecord::Migration[5.1]
  def change
    create_table :product_socials do |t|
      t.integer :product_id
      t.text :socials

      t.timestamps
    end
  end
end
