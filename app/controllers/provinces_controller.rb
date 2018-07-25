class ProvincesController < ApplicationController
  def index
    @provinces = Province.all
  end

  def import
    Province.import_data params[:file]
    redirect_to root_url, notice: "Data imported"
  end
end
