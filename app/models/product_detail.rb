class ProductDetail < ApplicationRecord
  TYPES = {floor: 0, toilet: 0, livingroom: 0, kitchen: 0, altar_room: 0, bedroom: 0,
  	built_in: 0}

  belongs_to :product
end
