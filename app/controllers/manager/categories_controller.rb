class Manager::CategoriesController < ApplicationController
  before_action :load_params, only: :create

  def index
    respond_to do |format|
      format.html
      format.json do
        render json: { categories: Category.all }
      end
    end
  end

  def create
    category = Category.create load_params
    category.save
    respond_to do |format|
      format.html
      format.json do
        render json: { data: category }
      end
    end
  end

  private
  def load_params
    params.permit :name
  end
end
