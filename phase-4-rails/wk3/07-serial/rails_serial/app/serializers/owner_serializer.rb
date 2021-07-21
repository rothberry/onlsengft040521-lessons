class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :full_name
  has_many :dogs

  def full_name
    object.name + " Roth"
  end
end
