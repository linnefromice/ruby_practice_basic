require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
  test "layout home" do
    get root_path
    assert_template 'static_pages/home'
    assert_select "title", full_title
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", help_path
    assert_select "a[href=?]", about_path
    assert_select "a[href=?]", contact_path
  end

  test "layout help" do
    get help_path
    assert_template 'static_pages/help'
    assert_select "title", full_title("Help")
  end
end
