class Skill < ActiveRecord::Base
  has_many :users

  # def self.create_skill(params)
  #   Skill.create(
  #     skill_name: params[:skill_name],
  #     user_id: params[:user_id]
  #   )
  # end

  # def self.delete_skill(params)
  #   skill = Skill.find(params)
  #   skill.destroy
  # end

  # def self.update(params)
  #   skill = Skill.find(params[:id])
  #   skill.update(skill_name: params[:skill_name])
  # end
end
