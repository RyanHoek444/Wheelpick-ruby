Rails.application.routes.draw do
  get "picker/index"
   
  get "category/Algebra", to: "categories#algebra"
  get "category/Basic Math", to: "categories#basicmath"
  get "category/Biology", to: "categories#biology"
  get "category/Calculus", to: "categories#calculus"
  get "category/Chemistry", to: "categories#chemistry"
  get "category/English", to: "categories#english"
  get "category/French", to: "categories#french"
  get "category/Physics", to: "categories#physics"
  get "category/Spanish", to: "categories#spanish"
  # get "welcome/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"

  # root "welcome#index";

  root "picker#index";
end




