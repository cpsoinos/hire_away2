class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    respond_to do |format|
      format.html
      format.json do
        @events = Event.all
        render json: @events
      end
    end
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

  def create
    @event = Event.create(event_params)
    render json: @event
  end

  def update
    @event = Event.find(params[:id])
    @event.update(event_params)
    render json: @event
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    head 204
  end

  protected

  def event_params
    params.require(:event).permit(:name, :start_time, :end_time, :venue_id)
  end

end
