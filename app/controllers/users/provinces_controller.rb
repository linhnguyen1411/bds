class ProvincesController < Users::BaseController
  def index
    render json: {
      provinces: Province.where("provinces.name like %?%", params[:term])
        .as_json(only: [:id, :name])
    }
  end
end
