Rails.application.routes.draw do

  devise_for :admins
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "homes/homepages#index"

  resources :provinces do
    collection {post :import}
  end

  resources :districts do
    collection {post :import}
  end

  resources :wards do
    collection {post :import}
  end
end
