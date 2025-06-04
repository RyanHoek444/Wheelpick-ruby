require "test_helper"

class PickerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get picker_index_url
    assert_response :success
  end
end
