class Admin::ProductTypesController < Admin::AdminsController

  def index
    product_types = ProductType.all
    return unless request.xhr?
    render json: {
      product_types: product_types
    }
  end
end
