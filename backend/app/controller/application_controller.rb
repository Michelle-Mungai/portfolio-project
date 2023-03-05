class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/' do
    'Projects API @2023'
  end

  # Fetch all users from the database
  get '/users' do
    user = User.all
    user.to_json
  end

  # Add a new user to the database
  post '/users' do
    user = User.create(params)
    user.to_json
  end

  # Fetch all projects from the database
  get '/user/:user_id/projects' do
    project = User.find(params[:user_id]).projects
    project.to_json
  end

  get '/projects' do
    Project.all.to_json
  end

  # Fetch project by :id from the database
  get '/projects/:id' do
    project = Project.find(params[:id])
    project.to_json
  end

  # Add a new project to the database
  post '/projects' do
    project = Project.create(params)
    project.to_json
  end

  # Delete a project by :id from the database
  delete '/projects/:id' do
    project = Project.find(params[:id])
    project.destroy
    project.to_json
  end

  # Update project data from the database
  patch '/projects/:id' do
    project = Project.find(params[:id])
    project.update(params)
    project.to_json
  end

  # Fetch all skills from the database
  get '/skills' do
    Skill.all.to_json
  end

  get '/user/:user_id/skills' do
    skill = User.find(params[:user_id]).skills
    skill.to_json
  end

  # Add a new skill to the database
  post '/skills' do
    skill = Skill.create(params)
    skill.to_json
  end

  # Delete a skill by :id from the database
  delete '/skills/:id' do
    skill = Skill.find(params[:id])
    skill.destroy
    skill.to_json
  end

  # Update a skill by :id from the database
  patch '/skills/:id' do
    skill = Skill.find(params[:id])
    skill.update(
      skill_name: params[:skill_name]
    )
    skill.to_json
  end

  # Configures the users password
  configure do
    set :sessions, true
    set :session_secret, ENV["SESSION_SECRET"]
  end
end
