# == Schema Information
#
# Table name: user_servers
#
#  id        :bigint           not null, primary key
#  user_id   :integer          not null
#  server_id :integer          not null
#

class UserServers < ApplicationRecord
  validates :user_id, uniqueness: { scope: :server_id }, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
end
