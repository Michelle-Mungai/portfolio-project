import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = ({ user }) => {
  const [skills, setSkills] = useState([]);
  const [newSkillName, setNewSkillName] = useState('');

  const loadSkills = async () => {
    try {
      const response = await axios.get(`http://localhost:9292/user/${user?.id}/skills`);
      setSkills(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const handleNewSkillSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:9292/skills', {
        skill_name: newSkillName,
        user_id: user.id
      });
      setSkills([...skills, response.data]);
      setNewSkillName('')
    } catch (error) {
      console.error(error);
    }
  };

  const handleSkillUpdate = async (skillId, updatedSkill) => {
    try {
      const response = await axios.patch(`http://localhost:9292/skills/${skillId}`, updatedSkill);
      setSkills(skills.map((skill) => (skill.id === response.data.id ? response.data : skill)));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSkillDelete = async (skillId) => {
    try {
      await axios.delete(`http://localhost:9292/skills/${skillId}`);
      setSkills(skills.filter((skill) => skill.id !== skillId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="skill-list">
      <h2>Skills</h2>

      <ul>
        {skills.map((skill) => {
      let info = {}
          return(
          <li key={skill.id}>
            <h3>Skill Name: {skill.skill_name}</h3>

            <form onSubmit={(event) => {
              event.preventDefault();
              handleSkillUpdate(skill.id, info);
            }}>
              <input type="text" name="skill_name" defaultValue={skill.skill_name} onChange={e=>{info = ({...info, [e.target.name]: e.target.value})}} />

              <button type="submit">Update Skill </button>
              <button onClick={() => handleSkillDelete(skill.id)}>Delete Skill</button>
            </form>
          </li>
        )
        })}
      </ul>

      <h3>Add a new skill</h3>

      <form onSubmit={handleNewSkillSubmit}>
        <label htmlFor="new-skill-name">Skill Name:</label>
        <input
          id="new-skill-name"
          type="text"
          value={newSkillName}
          onChange={(event) => setNewSkillName(event.target.value)}
        />
        <button type="submit">Add Skill </button>
      </form>
    </div>
  );
};

export default Skills;