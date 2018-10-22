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
    get ":product_type_id/:id", to: "products#show", as: "product"
  end

  scope module: "users" do
    devise_scope :user do
      get "dang-nhap", to: "sessions#new", as: "login"
      get "dang-xuat", to: "sessions#destroy", as: "logout"
      get "dang-ky", to: "registrations#new", as: "register"
      get "quen-mat-khau", to: "passwords#new", as: "forgot_password"
    end
    get "trang-ca-nhan", to: "dashboards#index", as: "dashboard"
    get "thay-doi-thong-tin", to: "profiles#show", as: "show_profile"
    put "thay-doi-thong-tin", to: "profiles#update", as: "update_profile"
    get "tao-moi-tin-rao", to: "products#new", as: "new_product"
    get "quan-ly-tin-rao", to: "products#index", as: "products"
    resources :products do
      collection do
        get "load_data"
      end
    end
    resources :provinces
  end
end
