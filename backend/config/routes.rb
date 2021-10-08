Rails.application.routes.draw do
  resources :comments, only: [:index, :create]
  resources :events, only: [:index, :destroy, :update]
  resources :users, only: [:show, :destroy, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/data", to: "events#index"
  get "/me" , to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  post "/newform", to: "events#create"
end
