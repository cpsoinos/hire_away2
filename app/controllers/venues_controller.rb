class VenuesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    respond_to do |format|
      format.html
      format.json do
        @venues = Venue.all
        render json: @venues
      end
    end
  end

  def show
    @venue = Venue.find(params[:id])
    render json: @venue
  end

  def create
    @venue = Venue.create(venue_params)
    render json: @venue
  end

  def update
    @venue = Venue.find(params[:id])
    @venue.update(venue_params)
    render json: @venue
  end

  def destroy
    @venue = Venue.find(params[:id])
    @venue.destroy
    head 204
  end

  protected

  def venue_params
    params.require(:venue).permit(:name, :address_1, :address_2, :city, :state, :zip)
  end

end
