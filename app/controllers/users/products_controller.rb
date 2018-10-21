class Users::ProductsController < Users::BaseController

  def new
  end

  def index
  end

  def create
  end

  def load_data
  	product_types = ProductType.all.as_json(only: [:id, :name])
  	render json: {
  	  product_types: product_types,
  	  product_detail_options: ProductDetail::TYPES,
  	  product_extention_options: ProductExtension::TYPES,
      product_social_options: ProductSocial::TYPES
  	}
  end
end
