class Users::PasswordsController < Devise::PasswordsController
  def create
    user = User.find_by email: params[:user][:email]
    user&.send_reset_password_instructions
    render json: {
      status: user.present?,
      errors: {email: [t("users.passwords.create.not_found")]}.to_json,
      message_success: t("users.passwords.create.success")
    }
  end

  def update
    user = User.reset_password_by_token(resource_params)
    status = user && user&.errors.empty?
    user.errors.delete(:reset_password_token)
    render json: {
      status: status,
      errors: user&.errors.to_json,
      message_error: t("users.passwords.update.not_found"),
      redirect_page: login_path
    }
  end
end
