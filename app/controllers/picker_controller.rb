class PickerController < ApplicationController
  def index
    @categories = Category.includes(:subcategories)
  end
end
