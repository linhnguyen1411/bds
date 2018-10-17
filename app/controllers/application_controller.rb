class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_locale
  layout :layout_by_resource

  private

  def layout_by_resource
    if devise_controller?
      "authenticate"
    else
      "home"
    end
  end

  def set_locale
    I18n.locale = :vi
  end
end
