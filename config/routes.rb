Rails.application.routes.draw do

  devise_for :admins
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "homes/homepages#index"

  scope module: "admin", path: "admin", as: :admin do
    get "/dashboard", to: "dashboards#index"
  end
end
