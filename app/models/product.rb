class Product < ApplicationRecord

  has_many :product_images

  has_one :ward
  has_one :district
  has_one :province
  has_one :product_detail
  has_one :product_extension

  belongs_to :product_type
  belongs_to :category
end
