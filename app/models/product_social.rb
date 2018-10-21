class ProductSocial < ApplicationRecord
  TYPES = {school: 0, hospital: 0, market: 0, supermarket: 0, park: 0, airport:0 , station: 0,
    train_station: 0, police_station: 0, kindergarten: 0}

  belongs_to :product
end
