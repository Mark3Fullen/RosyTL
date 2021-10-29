class EventsController < ApplicationController

    skip_before_action :authorize, only: [:index, :create, :update, :destroy]

    def index
        events = Event.all
        render json: events, status: :ok
    end

    def create
        event = Event.create(event_params)
        render json: event, status: :created
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content, status: :deleted
    end

    def update
        event = Event.find(params[:id])
        event.update(event_params)
        render json: event, status: :accepted
    end

    private

    def event_params
        params.permit(:user_id, :title, :cardTitle, :cardSubtitle, :cardDetailedText, :url)
    end

end
