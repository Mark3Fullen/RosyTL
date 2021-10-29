class CommentsController < ApplicationController

    skip_before_action :authorize, only: [:create, :index]

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def create
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    private

    def comment_params
        params.permit(:user_id, :event_id, :content)
    end

end
