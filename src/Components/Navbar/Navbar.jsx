import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar({userDate,logout}) {

const [shownav, setshownav] = useState(false)


function show(){
setshownav(true)
}

function hide(){
setshownav(false)
}




  return (<>
  <div className="nav-mobile position-relative ">
  <h1 className="h-mobile ">Noxe</h1>
  <i className="open fa-solid fa-bars-staggered" onClick={show}></i>
 
 {shownav? <nav className='p-2 d-flex justify-content-between  text-light'>
    <i className="close fa-solid fa-xmark ms-auto mb-3" onClick={hide}></i>

      <div className="div1 d-flex align-items-center">
        {userDate?<ul className="list-unstyled d-flex  align-items-center m-0 ">
          <li className='px-2 '><Link  to='home'>Home</Link> </li>
          <li className='px-2'><Link   to='movies'>Movies</Link> </li>
          <li className='px-2'><Link  to='tv'>Tv</Link> </li>
          <li className='px-2'><Link  to='people'>People</Link> </li>
          
        </ul>:''}
        

      </div>
    
      <div className="div2 d-flex  align-items-center">
        <div className='social-media'>
          <i className='fab mx-1 fa-facebook'></i>
          <i className='fab mx-1 fa-instagram'></i>
          <i className='fab mx-1 fa-twitter'></i>
          <i className='fab mx-1 fa-spotify'></i>
          <i className='fab mx-1 fa-youtube'></i>

        </div>
        <ul className="list-unstyled d-flex  align-items-center m-0">
          {userDate?<>
            <li className='px-2 cursur-pointer' onClick={logout}><span>Logout</span> </li> 
          
          </>  :
          <>
          <li className='px-2 '> <Link  to='login'>Login</Link> </li>
          <li className='px-2'><Link  to='/'>Register</Link> </li>
          </>
          }
                 
        </ul>

      </div>

     
    </nav>:""}

   </div>




   <nav className='nav-lap p-2 d-flex justify-content-between  text-light'>
    

      <div className=" d-flex align-items-center">
        <h1 className="m-0 pe-md-4 ">Noxe</h1>
        {userDate?<ul className="list-unstyled d-flex  align-items-center m-0 ">
          
          <li className='px-2 '><Link  to='home'>Home</Link> </li>
          <li className='px-2'><Link   to='movies'>Movies</Link> </li>
          <li className='px-2'><Link  to='tv'>Tv</Link> </li>
          <li className='px-2'><Link  to='people'>People</Link> </li>
          
        </ul>:""}
        

      </div>
    
      <div className=" d-flex  align-items-center">
        <div className='social-media'>
          <i className='fab mx-1 fa-facebook'></i>
          <i className='fab mx-1 fa-instagram'></i>
          <i className='fab mx-1 fa-twitter'></i>
          <i className='fab mx-1 fa-spotify'></i>
          <i className='fab mx-1 fa-youtube'></i>

        </div>
        <ul className="list-unstyled d-flex  align-items-center m-0">
        {userDate?<>
            <li className='px-2 cursur-pointer' onClick={logout}><span>Logout</span> </li>
          
          </>  :
          <>
          <li className='px-2 '> <Link  to='login'>Login</Link> </li>
          <li className='px-2'><Link  to='/'>Register</Link> </li>
          </>
          }
                 
        </ul>

      </div>

     
    </nav>



 </> )
}
