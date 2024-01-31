import React from 'react'
import { Helmet } from 'react-helmet'
import useData from '../Hooks/useData'

export default function People() {
  
  let {trandingFilm,isloading}=useData(`https://api.themoviedb.org/3/trending/person/day?api_key=4d1da0dc46ba1f7010a3b83634c07d77`)

  let path = 'https://image.tmdb.org/t/p/w500'
  return (
   <>
   <Helmet>
   <meta charSet="utf-8" />
   <title>noxe |people page</title>
   </Helmet>


{isloading?<div className="d-flex justify-content-center align-items-center vh-100"><i className="fa-2x fa-solid fa-spinner fa-spin-pulse"></i></div>:<div className='row g-3 py-5'>
          <div className="col-md-3 ">
            
            <div className='bordr w-25 mb-3'></div>
            <h2 className='h3'>Tranding <br/> people <br/> to Watch now</h2>
            <p className='text-light text-opacity-50 mt-3'>Most Watched peoples by days</p>
            <div className='bordr w-100 mt-3'></div>

          </div>
          
         {trandingFilm.map((person,index)=><div className='col-md-3 col-sm-6' key={index}>
          <div className='position-relative text-center'>

          
          <img src={path+person.profile_path} alt="" className='img-thumbnail'/> 
          <h2 className='py-3 h4 '>{person.name}</h2>
          </div> </div>)}
          



        </div>}
   
   </>
  )
}
