# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  edited     :boolean          default(FALSE), not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true
  validates :edited, inclusion: { in: [true, false] }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
end
