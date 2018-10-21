class ProductExtension < ApplicationRecord
  TYPES = {garage: 0, garage_car: 0, camera: 0, internet: 0, tivi_cap: 0,
	  air_conditioner: 0, pool: 0, fitness: 0, terrace: 0}

  belongs_to :product
end
