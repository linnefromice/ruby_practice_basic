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
    assert_select "a[href=?]", signup_path
  end

  test "layout help" do
    get help_path
    assert_template 'static_pages/help'
    assert_select "title", full_title("Help")
  end

  test "layout about" do
    get about_path
    assert_template 'static_pages/about'
    assert_select "title", full_title("About")
  end

  test "layout contact" do
    get contact_path
    assert_template 'static_pages/contact'
    assert_select "title", full_title("Contact")
  end

  test "layout signup" do
    get signup_path
    assert_template 'users/new'
    assert_select "title", full_title("Sign up")
  end

end
