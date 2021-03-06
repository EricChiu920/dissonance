Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resources :user_servers, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :channels, only: [:show, :create, :update, :destroy]
    resources :messages, only: [:create, :update, :destroy]

    resource :session, only: [:create, :destroy]
  end
end
