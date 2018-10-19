class Admins::AdminsController < ApplicationController
  protect_from_forgery with: :exception

  layout "admin_manager"
end
