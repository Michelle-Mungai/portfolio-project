import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = ({ user }) => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newProjectLanguage, setNewProjectLanguage] = useState('');

  const loadProjects = async () => {
    try {
      const response = await axios.get(`http://localhost:9292/user/${user?.id}/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleNewProjectSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:9292/projects', {
        project_name: newProjectName,
        project_description: newProjectDescription,
        project_language: newProjectLanguage,
        user_id: user.id
      });
      setProjects([...projects, response.data]);
      setNewProjectName('');
      setNewProjectDescription('');
      setNewProjectLanguage('')
    } catch (error) {
      console.error(error);
    }
  };

  const handleProjectUpdate = async (projectId, updatedProject) => {
    try {
      const response = await axios.patch(`http://localhost:9292/projects/${projectId}`, updatedProject);
      setProjects(projects.map((project) => (project.id === response.data.id ? response.data : project)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleProjectDelete = async (projectId) => {
    try {
      await axios.delete(`http://localhost:9292/projects/${projectId}`);
      setProjects(projects.filter((project) => project.id !== projectId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="project-list">
      <h2>Projects</h2>

      <ul>
        {projects.map((project) => {
      let info = {}
          return(
          <li key={project.id}>
            <h3>Project Name: {project.project_name}</h3>
            <p>Project Description: {project.project_description}</p>
            <p>Project Language: {project.project_language}</p>

            <form onSubmit={(event) => {
              event.preventDefault();
              handleProjectUpdate(project.id, info);
            }}>
              <input type="text" name="project_name" defaultValue={project.project_name} onChange={e=>{info = ({...info, [e.target.name]: e.target.value})}} />
              <input type="text" name="project_description" defaultValue={project.project_description} onChange={e=>{info = ({...info, [e.target.name]: e.target.value})}} />
              <input type="text" name="project_language" defaultValue={project.project_language} onChange={e=>{info = ({...info, [e.target.name]: e.target.value})}} />
              <button type="submit">Update Project</button>
              <button onClick={() => handleProjectDelete(project.id)}>Delete Project</button>
            </form>
            </li>
        )
        })}
      </ul>

      <h3>Add a new project</h3>

      <form onSubmit={handleNewProjectSubmit}>
        <label htmlFor="new-project-name">Project Name:</label>
        <input
          id="new-project-name"
          type="text"
          value={newProjectName}
          onChange={(event) => setNewProjectName(event.target.value)}
        />

        <label htmlFor="new-project-description">Project Description:</label>
        <input
          id="new-project-description"
          type="text"
          value={newProjectDescription}
          onChange={(event) => setNewProjectDescription(event.target.value)}
        />

        <label htmlFor="new-project-description">Project Language:</label>
        <input
          id="new-project-language"
          type="text"
          value={newProjectLanguage}
          onChange={(event) => setNewProjectLanguage(event.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default Projects;