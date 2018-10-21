class Product < ApplicationRecord
  has_many :product_images

  has_one :ward
  has_one :district
  has_one :province
  has_one :product_detail
  has_one :product_extension

  belongs_to :product_type
  belongs_to :category

  enum status: {for_rent: 0, for_sale: 1, buy: 2}
  enum certificate: {home_ownership: 0, land_use_right: 1, certificate: 2}
  enum unit: {negotiate: 0, million: 1, billion: 2}
end
