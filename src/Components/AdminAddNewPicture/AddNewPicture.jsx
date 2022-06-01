import React, {useState} from "react";
import './AddNewPicture.css'
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import axios from "axios";
const AddNewPicture = ()=>
{
    async function AddNewPicture()
    {
        if(document.getElementById("purl").value==='')
        {
            alert("enter url");
        }
        /*else if(!document.getElementById("purl").value.includes('.png')&&!document.getElementById("purl").value.includes('.jpg'))
        {
            alert("url must contain .png in the end");
        }*/
        else if(document.getElementById("pname").value==="")
        {
            alert("enter name");
        }
        else if(document.getElementById("pname").value.length < 3)
        {
            alert("name length must be greatest than 3");
        }
        else
        {
            alert("Succes )");
            const image = new FormData();
            image.append("id", null);
            image.append("url", document.getElementById("purl").value);
            image.append("name", document.getElementById("pname").value);
            image.append("themes", document.getElementById("pthemes").value);
            console.log(image);
            const responce = await axios.post('https://localhost:5001/images', image, 
            {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            document.getElementById("purl").value = "";
            document.getElementById("pname").value = "";
            document.getElementById("pthemes").value = "";
        }
    }
    return(<>
            <AdminNavBar/>
            <div className="new-picture-prop-field-container">
                <p className="new-picture-prop-fill-label">URL</p>
                <input type='text' className="new-picture-prop-field" id="purl"></input>
                <p className="new-picture-prop-fill-label">Name</p>
                <input type='text' className="new-picture-prop-field"id="pname"></input>
                <p className="new-picture-prop-fill-label">Related themes</p>
                <input type='text' className="new-picture-prop-field" id="pthemes"></input>
                <div className="addbtn">
                    <button className="btn btn-lg btn-dark" onClick={AddNewPicture}>Add picture</button>
                </div>
            </div>
        </>
    );
}

export default AddNewPicture; 