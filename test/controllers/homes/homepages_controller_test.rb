require 'test_helper'

class Homes::HomepagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get homes_homepages_index_url
    assert_response :success
  end

end
