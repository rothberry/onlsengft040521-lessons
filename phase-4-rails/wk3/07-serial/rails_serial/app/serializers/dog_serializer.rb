class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed
  belongs_to :owner
end
