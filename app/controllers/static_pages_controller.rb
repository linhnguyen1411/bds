class StaticPagesController < ApplicationController

  def index
    @provinces = Province.all
  end
end
