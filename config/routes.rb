Rails.application.routes.draw do
  devise_for :users
  root "static_pages#index"

  namespace :manager do
    root to: "admin_pages#dashboard"
    resources :categories
  end
end
