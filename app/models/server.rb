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

  after_create :join_server!

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
    class_name: :Channel

  def join_server!
    self.user_servers.create!({user_id: owner_id})
  end
end
