Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admins, controllers: {sessions: "admin/sessions",
    passwords: "admin/passwords"}

  devise_for :users, controllers: {registrations: "user/registrations",
    sessions: "user/sessions", passwords: "user/passwords"}

  devise_scope :user do
    get "login", to: "user/sessions#new"
    get "logout", to: "user/sessions#destroy"
    get "register", to: "user/registrations#new"
    get "forgot_password", to: "user/passwords#new"
  end

  devise_scope :admin do
    get "admin_login", to: "admin/sessions#new"
    get "admin_logout", to: "admin/sessions#destroy"
    get "admin_forgot_password", to: "admin/passwords#new"
  end

  root "homes/homepages#index"

  scope module: "admin", path: "admin", as: :admin do
    get "/dashboard", to: "dashboards#index"
    resources :product_types
    resources :products
  end

  scope module: "homes" do
    resources :products
  end
end
