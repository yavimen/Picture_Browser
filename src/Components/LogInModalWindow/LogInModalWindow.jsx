import React,{useState} from "react"
import axios from 'axios';
import "./LogInModalWindow.css"


const LogInModalWindow = ({visible, setVisible, setLogup, setadmin}) => {
    async function fetchUsers(value)
    {
        if(document.getElementById("title").value === '' ||document.getElementById("description").value === '')
        {
            alert("Please, fill up the fields!");
        }
        else{
            console.log(value);
            const responce = await axios.get('https://localhost:5001/'+value.login);
            console.log(responce.data?.data);
            if(responce.data.data === null)
                alert(responce.data.message);
            else if(responce.data.data.password!==value.password)
                alert("Password is wrong")
            else{
                /*alert('Hello '+responce.data.data.login);*/
                setVisible(false);
                if(responce.data.data.userPermission === "Admin")
                    setadmin(true);
                else
                    setadmin(false);
            }
        }
    }
    const [login, setLogin] = useState(' ')
    const [password, setPassword] = useState(' ')
    const rootClass = ['modal'];
    if(visible)
        rootClass.push('active')
        return(
            <div className={rootClass.join(' ')}>
                <div className='modalContent' /*onClick={()=>setVisible(false)}*/>
                <h2>LogIn</h2><hr />
                <form action="/action_page.php">
                    <div className="form-group">
                        <label htmlFor="title">Login</label>
                        <input required type="text" className="form-control" id="title" placeholder="login..." name="title" onChange={e=>{setLogin(e.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Password</label>
                        <input type="password" className="form-control" id="description" placeholder="password..." name="description" onChange={e=>{setPassword(e.target.value)}}/>
                    </div> 
                    <hr />   
                </form> 
                <div className="button-container">
                    <button className="btn btn-primary" onClick={()=>fetchUsers({login, password})}>Confirm</button>
                    <button className="btn btn-primary" onClick={()=>{setVisible(false); setLogup(true)}}>LogUp</button>
                </div>
                </div>
            </div>
    );
};

export default LogInModalWindow
