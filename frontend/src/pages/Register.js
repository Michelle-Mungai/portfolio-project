import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Register.css'

 const initialState = {
        username: "",
        email: "",
        password: "",
    } 

const Register = ({ setUser }) => {
   
    const [value, setValue] = useState(initialState)

    const navigate = useNavigate();

    let login = false;

    const handleSubmit = async (e) => {
        e.preventDefault()

        login = true;      
        
        let res = await axios.post('http://localhost:9292/users/login', value)
        let data = await JSON.stringify(res.data)
        await setUser(JSON.parse(data))

        await navigate('/landing');
    } 
    useEffect(() => {
        if (login === true){
            console.log(login);
          navigate('/landing')}
        }, [login, navigate])

    const handleChange = (e) => {
        return setValue ({...value, [e.target.name]: e.target.value})
    }
      return (
    <div>
        <form onSubmit={handleSubmit}>
          <h1> Login </h1>
      <label>
        Username:
        <input type="text" name="username" value={value.username} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input
          type="email" name="email" value={value.email} onChange={handleChange}/>
      </label>
      <label>
        Password:
        <input
          type="password" name="password" value={value.password} onChange={handleChange}
        />
      </label>
      <button type = "submit" onClick={handleSubmit}> Log in </button>
    </form>
    </div>
  )
}

export default Register;