import { useState } from "react";
import './notificationStyles.css'
import { Container } from "react-bootstrap";

const Notifications = ()=>{
    // dummy notification text messages in place for dynamic data
    const [notifications, setNotifications] = useState([
        {msgHead:'Item accepted', msgBody:'-The buyer has accepted the transaction with ID...', msgTime:'... 5:45pm', id:1},
        {msgHead:'Buyer has accepted the transaction terms...', msgBody:'-Terms have been agreed by buyer with the transaction with ID... the transction can now proceed to the next phase', msgTime:'... 5:45pm', id:2},
        {msgHead:'You have an invitation to start transaction..', msgBody:'-James Rodgers has invited you to agree terms and start transactions', msgTime:'... 5:45pm', id:3},
        {msgHead:'You have an invitation to start transaction..', msgBody:'-James Rodgers has invited you to agree terms and start transactions', msgTime:'... 5:45pm', id:4},
    ])

    


    return(
        <div className="wrapper">
            <Container  className="notifications">
                <h1>Notification</h1>
                {notifications.length > 0 && <div className="msgBox">
                    {notifications.map((msg)=>(
                            <div className="grid" key={msg.id}>
                                <div className="div head" >{msg.msgHead}</div>
                                <div className="div body">{msg.msgBody}</div>
                                <div className="div time">{msg.msgTime}</div>
                            </div>
                    ))}
                </div>}

                {/*................ No notifictions Page........................... */}

                {notifications <= 0 && <div className="noMsg"><span>Oops! There are no notifications for you.</span></div>}
            </Container>
        </div>
    )
}

export default Notifications;