class Manager::AdminPagesController < ApplicationController
  layout 'manager', only: [:dashboard]
  def dashboard
  end

  def auth
  end

  def reg
  end

  def not_found
  end
end
