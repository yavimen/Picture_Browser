import React, {useState} from "react";
import LogInModalWindow from './Components/LogInModalWindow/LogInModalWindow';
import LogUpModalWindow from './Components/LogUpModalWindow/LogUpModalWindow';
import { Navigate } from "react-router-dom";

function VerificationLayout() {
    const [loginModal, setLoginModal] = useState(true);
    const [logupModal, setLogupModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    return (
      <div className="verification">
        {console.log(loginModal)}
        {console.log(logupModal)}
        {console.log(!(logupModal||loginModal))}
        {console.log(isAdmin)}
        <LogInModalWindow visible={loginModal} setVisible={setLoginModal} setLogup ={setLogupModal} setadmin = {setIsAdmin}/>
        <LogUpModalWindow visible={logupModal} setVisible={setLogupModal} setLoginMod = {setLoginModal}/>
        {!(logupModal||loginModal)===true?isAdmin?<Navigate to="/AdminHome"/>:<Navigate to="/UserHome"/>:<></>}
      </div>
    );
  }

  export default VerificationLayout;