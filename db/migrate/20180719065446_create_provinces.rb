class CreateProvinces < ActiveRecord::Migration[5.1]
  def change
    create_table :provinces do |t|
      t.string :name
      t.integer :code
      t.string :province_type

      t.timestamps
    end
  end
end
