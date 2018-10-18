class Users::RegistrationsController < Devise::RegistrationsController
  def create
    user = User.new user_params
    status = user.save
    sign_in(user) if status
    render json: {
      status: status,
      errors: user.errors.to_json,
      redirect_page: root_path
    }
  end

  protected

  def user_params
    params.require(:user).permit :name, :email, :password, :password_confirmation
  end
end
