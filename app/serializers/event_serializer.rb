class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :cardTitle, :cardSubtitle, :cardDetailedText, :url
  has_one :user
  has_many :comments
end
