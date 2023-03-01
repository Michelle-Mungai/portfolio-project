class Project < ActiveRecord::Base
  belongs_to :users

#   def self.create_project(params)
#     Project.create(
#       project_name: params[:project_name],
#       project_description: params[:project_description],
#       project_language: params[:project_language],
#       user_id: params[:user_id]
#     )
#   end

#   def self.delete_project(params)
#     project = Project.find(params)
#     project.destroy
#   end

#   def self.update(params)
#     project = Project.find(params[:id])
#     project.update(project_name: params[:project_name], project_description: params[:project_description], project_language: params[:project_language])
#   end
end
