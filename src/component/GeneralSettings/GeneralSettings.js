import React from 'react';
import { GeneralStyles } from "./Styles/GeneralSettings.styled";
import {FaArrowRight} from "react-icons/fa"

const GeneralSettings = ()=>{
    return(
       <GeneralStyles>
          <div className="boxWrapper">
            <div className="box">
                <p>Two factor authentification</p>
                <span><FaArrowRight className="arrow"/></span>
            </div>
            <div className="box">
                <p>Notification settings</p>
                <span><FaArrowRight className="arrow" /></span>
            </div>
          </div>
       </GeneralStyles>
    )
}

export default GeneralSettings;