class CreateWards < ActiveRecord::Migration[5.1]
  def change
    create_table :wards do |t|
      t.string :name
      t.integer :code
      t.string :ward_type
      t.integer :district_id

      t.timestamps
    end
  end
end
