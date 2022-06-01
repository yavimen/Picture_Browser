import React from "react";
import './UserImageBoard.css'
const UserImageBoard = ({image})=>{
    return(
        <div className="image-board">
            <div className="image-container">
                <img className="myimage" src={image.url} alt={image.name} />
            </div>
            <div className="image-name-container">
                <div className="image-title">{image.name}</div>
            </div>
        </div>
    );
} 
export default UserImageBoard;