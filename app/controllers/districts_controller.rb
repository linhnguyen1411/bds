class DistrictsController < ApplicationController
  def index
    @districts = District.all
  end

  def import
    District.import_data params[:file]
    redirect_to root_url, notice: "Data imported"
  end
end
