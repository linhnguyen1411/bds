require 'test_helper'

class Homes::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get homes_users_show_url
    assert_response :success
  end

  test "should get update" do
    get homes_users_update_url
    assert_response :success
  end

end
