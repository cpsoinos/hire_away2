class EventMailer < ApplicationMailer

  def send_call
    @contact = Contact.find(params[:contact_id])
    @events  = Event.where(id: params[:event_ids])

    mail(
      to:      contact.email,
      subject: params[:subject]
    )
  end

  def confirm_call

  end

end
