class Homes::UsersController < ApplicationController
  before_action :authenticate_user!

  def show
  end

  def update
    status = current_user.update_attributes user_params
    render json: {
      status: status,
      current_user: current_user
    }
  end

  private
  def user_params
    params.require(:user).permit(User::USER_ATTR)
  end
end
