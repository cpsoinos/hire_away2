class ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    respond_to do |format|
      format.html
      format.json do
        @contacts = Contact.all
        render json: @contacts
      end
    end
  end

  def show
    @contact = Contact.find(params[:id])
    render json: @contact
  end

  def create
    @contact = Contact.create(contact_params)
    render json: @contact
  end

  def update
    @contact = Contact.find(params[:id])
    @contact.update(contact_params)
    render json: @contact
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    head 204
  end

  protected

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone, :address_1, :address_2, :city, :state, :zip)
  end

end
