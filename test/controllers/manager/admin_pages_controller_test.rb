require 'test_helper'

class Manager::AdminPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get dashboard" do
    get manager_admin_pages_dashboard_url
    assert_response :success
  end

  test "should get auth" do
    get manager_admin_pages_auth_url
    assert_response :success
  end

  test "should get reg" do
    get manager_admin_pages_reg_url
    assert_response :success
  end

  test "should get not_found" do
    get manager_admin_pages_not_found_url
    assert_response :success
  end

end
