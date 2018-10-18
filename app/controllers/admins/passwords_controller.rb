class Admins::PasswordsController < Devise::PasswordsController
  def create
    admin = Admin.find_by email: params[:admin][:email]
    admin&.send_reset_password_instructions
    render json: {
      status: admin.present?,
      errors: {email: [t("admins.passwords.create.not_found")]}.to_json,
      message_success: t("admins.passwords.create.success")
    }
  end

  def update
    admin = Admin.reset_password_by_token(resource_params)
    status = admin && admin&.errors.empty?
    admin.errors.delete(:reset_password_token)
    render json: {
      status: status,
      errors: admin&.errors.to_json,
      message_error: t("admins.passwords.update.not_found"),
      redirect_page: admin_login_path
    }
  end
end
