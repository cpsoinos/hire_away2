FactoryGirl.define do

  factory :contact do
    first_name Faker::Name.first_name
    last_name  Faker::Name.last_name
    sequence(:email) { |n| Faker::Internet.email.sub("@", "#{n}@") }
    address_1 Faker::Address.street_address
    address_2 Faker::Address.secondary_address
    city Faker::Address.city
    state Faker::Address.state_abbr
    zip Faker::Address.zip
    phone Faker::PhoneNumber.phone_number
  end

end
