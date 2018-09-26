Rails.application.routes.draw do

  devise_for :admins
  devise_for :users, controllers: {registrations: "user/registrations",
    sessions: "user/sessions", passwords: "user/passwords"}

  devise_scope :user do
    get "login", to: "user/sessions#new"
    get "logout", to: "user/sessions#destroy"
    get "register", to: "user/registrations#new"
  end

  root "homes/homepages#index"

  scope module: "admin", path: "admin", as: :admin do
    get "/dashboard", to: "dashboards#index"
    resources :product_types
  end
end
