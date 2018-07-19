class WardsController < ApplicationController
  def index
    @wards = Ward.all
  end

  def import
    Ward.import_data params[:file]
    redirect_to root_url, notice: "Data imported"
  end
end
