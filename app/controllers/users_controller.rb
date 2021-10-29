class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create, :destroy, :update, :show]

    def show
        user = User.find_by(params[:id])
        render json: user, status: :ok
    end

    def index
        users = User.all
        render json: users, status: :ok
    end

    def create
        user = User.create(user_params)
        session[:id] = user.id
        render json: user, status: :created
    end

    def destroy
        user = User.find(params[:id])
        user.events.destroy_all
        user.destroy
        head :no_content, status: :deleted
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :accepted
    end

    private

    def user_params
        params.permit(:name, :password, :password_confirmation, :email)
    end

end
