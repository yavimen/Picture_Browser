import React from "react";
import './AdminImageBoard.css'
import axios from "axios";
const AdminImageBoard = ({image, setNewList})=>{
    async function DeleteCurrentImage()
    {
        const responce = await axios.delete('https://localhost:5001/images/'+image.id).then((responce)=>{
            setNewList(responce.data.data);
            console.log("My deleted list"+responce.data.data );
        });
    }
    return(
        <div className="aimage-board">
            <div className="aimage-container">
                <img className="amyimage" src={image.url} alt={image.name} />
            </div>
            <div className="aimage-name-container">
                <div className="aimage-title">{image.name}</div>
            </div>
            <div className="aimage-delete-button-container">
                <button  className="deletebtn btn btn-lg btn-dark" onClick={DeleteCurrentImage}>Delete</button>
            </div>
        </div>
    );
} 
export default AdminImageBoard;