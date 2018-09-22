class Homes::HomepagesController < Homes::BaseController
  def index
    @provinces = Province.all
  end
end
