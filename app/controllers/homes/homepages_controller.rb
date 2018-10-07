class Homes::HomepagesController < Homes::BaseController
  def index
    @provinces = Province.all
    return unless request.xhr?
    render json: {
      status: true,
      provinces: @provinces
    }
  end
end
