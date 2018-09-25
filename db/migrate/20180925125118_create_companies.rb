class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :mst
      t.integer :type_of_company
      t.integer :owner_id

      t.timestamps
    end
  end
end
