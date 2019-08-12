# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
  validates :name, :owner_id, presence: true
  validates :private, inclusion: { in: [true, false] }


  after_create :join_server!, :create_general_channel

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :user_servers,
    foreign_key: :server_id,
    class_name: :UserServers,
    dependent: :destroy

  has_many :users,
    through: :user_servers,
    source: :user

  has_many :channels,
    foreign_key: :server_id,
    class_name: :Channel,
    dependent: :destroy

  def join_server!
    self.user_servers.create!({user_id: owner_id})
  end

  def create_general_channel
    self.channels.create({ name: 'general' })
  end
end
