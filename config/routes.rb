Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admins, controllers: {sessions: "admins/sessions",
    passwords: "admins/passwords"}

  devise_for :users, controllers: {registrations: "users/registrations",
    sessions: "users/sessions", passwords: "users/passwords"}

  scope module: "admins", path: "admins", as: :admins do
    devise_scope :admin do
      get "login", to: "sessions#new"
      get "logout", to: "sessions#destroy"
      get "forgot_password", to: "passwords#new"
    end
    get "/dashboard", to: "dashboards#index"
    resources :product_types
    resources :products
  end

  scope module: "homes" do
    root "homepages#index"
    resources :products
  end

  scope module: "users" do
    devise_scope :user do
      get "login", to: "sessions#new"
      get "logout", to: "sessions#destroy"
      get "register", to: "registrations#new"
      get "forgot_password", to: "passwords#new"
    end
    get "dashboard", to: "dashboards#index"
    get "profile", to: "profiles#show"
    put "profile", to: "profiles#update"
    resources :products
  end
end
