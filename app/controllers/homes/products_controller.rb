class Homes::ProductsController < Homes::BaseController
  before_action :load_product, only: :show

  def show
  end

  private
  def load_product
    @product = Product.friendly.find(params[:id])
  end
end
