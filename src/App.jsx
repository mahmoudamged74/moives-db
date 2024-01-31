
import {RouterProvider, createHashRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import People from './Components/People/People'
import Tv from './Components/Tv/Tv'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Details from './Components/Details/Details'
import { Offline} from 'react-detect-offline'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

function App() {
useEffect(() => {
if (localStorage.getItem('userToken') !== null) {
  saveUserData();
}

}, []);

const [userDate, setuserDate] = useState(null);

function saveUserData() {
  let encodedToken=localStorage.getItem('userToken');
  let decodedToken=jwtDecode(encodedToken)
  setuserDate(decodedToken)
}




let routers=createHashRouter([
  {path:'',element:<Layout userDate={userDate} setuserDate={setuserDate} />,children:[
   {index:true,element:<Register/>}, 
   {path:'login',element:<Login saveUserData={saveUserData}/>},
   {path:'home',element:<ProtectedRoute><Home/></ProtectedRoute>   },
   {path:'people',element:<ProtectedRoute><People/></ProtectedRoute> },
   {path:'tv',element:<ProtectedRoute><Tv/></ProtectedRoute>},
   {path:'movies',element:<ProtectedRoute><Movies/></ProtectedRoute>},
   {path:'details/:id/:mediatype',element:<ProtectedRoute><Details/></ProtectedRoute>},
   
  ]}
])

  return (
    <>


<Offline><div className='offline'>you are offline</div></Offline>
<RouterProvider router={routers}/>
    
    
    
    </>
  )
}

export default App;
