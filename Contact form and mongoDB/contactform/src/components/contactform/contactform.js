import {React,useState} from 'react'
import './contactform.css'

export default function Contactform() {

    /* on button submit, capture all data in the forms and store in vars. 
    then send it to backend */

    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [subject,setsubject]=useState('');
    const [message,setmessage]=useState('');

    const sendtoback=()=>{
        fetch('http://localhost:3131/logmessage', {
            method: "POST",
            body: JSON.stringify({
                name:name,
                email:email,
                subject:subject,
                message:message
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    return (
        <div>
            <h3>Contact Form</h3>
            <p>Name</p>
            <input type="text" onChange={(e) => setname(e.target.value)}/>
            <p>Email</p>
            <input type="email" onChange={(e) => setemail(e.target.value)}/>
            <p>Subject</p>
            <input type="text" onChange={(e) => setsubject(e.target.value)}/>
            <p>Message</p>
            <input type="text" onChange={(e) => setmessage(e.target.value)}/>
            <br/>
            <button className= 'contact_button' onClick={sendtoback}>Submit</button>
        </div>
    )
}
