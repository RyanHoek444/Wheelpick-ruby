# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
math = Category.create!(name: "Mathematics")
math.subcategories.create!(name: "Algebra")
math.subcategories.create!(name: "Basic Math")
math.subcategories.create!(name: "Calculus")

science = Category.create!(name: "Science")
science.subcategories.create!(name: "Biology")
science.subcategories.create!(name: "Physics")
science.subcategories.create!(name: "Chemistry")

language = Category.create!(name: "Language")
language.subcategories.create!(name: "French")
language.subcategories.create!(name: "Spanish")
language.subcategories.create!(name: "English")