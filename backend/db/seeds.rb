# This will delete any existing rows from the Product and User tables
# so you can run the seed file multiple times without having duplicate entries in your database
puts "Deleting old data..."
Skill.destroy_all
Project.destroy_all
User.destroy_all

puts "Creating users..."
user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: "shoe")
user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: "rose")
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: "dev")


puts "Creating projects..."
project1 = Project.create(project_name: "Stapler", project_language: "Ruby", project_description: "Great", user_id: 1)
project1 = Project.create(project_name: "Whiteboard", project_language: "Ruby", project_description: "Great", user_id: 1)
project1 = Project.create(project_name: "Dry Erase Markers", project_language: "Ruby", project_description: "Great", user_id: 2)
project1 = Project.create(project_name: "Ballpoint Pens", project_language: "Ruby", project_description: "Great", user_id: 1)
project1 = Project.create(project_name: "Scotch Tape", project_language: "Ruby" , project_description: "Great", user_id: 2)

puts "Creating skills..."

skill1 = Skill.create(skill_name: "Html", user_id:1)
skill1 = Skill.create(skill_name: "Java", user_id:2)
skill1 = Skill.create(skill_name: "Html", user_id:1)

puts "Seeding done!"