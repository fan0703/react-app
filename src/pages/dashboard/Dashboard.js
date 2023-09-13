import React from 'react'
import "./dashboard.css"
export default function Dashboard() {
    return(
        <div className='dashborad'>
            <h3 className='signin_text'>Please sign in here</h3>
        <input className='signin_name'
        type="text"
        placeholder='Name:'/>
         <input className='signin_email'
        type="text"
        placeholder='Email:'/>
            <input className='signin_password'
        type="text"
        placeholder='Password:'/>
        <input className="submit_button" type="submit" value="Submit" />
        </div>
    )

}