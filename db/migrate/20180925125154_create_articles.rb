class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :description
      t.text :content
      t.string :tag
      t.integer :category_id

      t.timestamps
    end
  end
end
