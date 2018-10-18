class Admins::ProductTypesController < Admins::AdminsController

  before_action :load_product_type, only: [:show, :update, :destroy]

  def show
    if @product_type
      render json: {
        status: true,
        product_type: @product_type
      }
    else
      render json: {
        status: false
      }
    end
  end

  def index
    product_types = ProductType.all
    return unless request.xhr?
    render json: {
      product_types: product_types
    }
  end

  def create
    product_type = ProductType.new product_type_params
    status = product_type.save
    render json: {
      product_types: ProductType.all,
      status: status,
      errors: product_type.errors.messages
    }
  end

  def update
    @product_type.assign_attributes product_type_params
    status = @product_type.save
    render json: {
      product_types: ProductType.all,
      status: status,
      errors: @product_type.errors.messages
    }
  end

  def destroy
    status = @product_type.destroy
    render json: {
      product_types: ProductType.all,
      status: status
    }
  end

  private
  def product_type_params
    params.require(:product_type).permit(:name)
  end

  def load_product_type
    @product_type = ProductType.find_by id: params[:id]
  end
end
