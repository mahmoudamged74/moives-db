import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Media from '../Media/Media'
import {Helmet} from "react-helmet";

export default function Home() {
  const [trandingmovie, settrandingmovie] = useState([])
  const [trandingtv, settrandingtv] = useState([])
  const [trandingpeople, settrandingpeople] = useState([])

  async function gettranding(mediatype, callback) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=4d1da0dc46ba1f7010a3b83634c07d77`)
    callback(data.results)
   
  }
  useEffect(() => {
    gettranding('movie', settrandingmovie)
    gettranding('tv', settrandingtv)
    gettranding('person', settrandingpeople)


  }, [])

  return (
    <>
    
<Helmet>
   <meta charSet="utf-8" />
   <title>noxe |Home page</title>
</Helmet>

        <div className='row g-3 py-5'>
          <div className="col-md-4 ">
            
            <div className='bordr w-25 mb-3'></div>
            <h2 className='h3'>Tranding <br/> movie <br/> to Watch now</h2>
            <p className='text-light text-opacity-50 mt-3'>Most Watched movies by days</p>
            <div className='bordr w-100 mt-3'></div>

          </div>
          
         {trandingmovie.splice(0,10).map((tv,index)=><Media key={index} term={tv}/>)}
          



        </div>
        <div className='row g-3 py-5'>
          <div className="col-md-4 ">
            
            <div className='bordr w-25 mb-3'></div>
            <h2 className='h3'>Tranding <br/> Tv <br/> to Watch now</h2>
            <p className='text-light text-opacity-50 mt-3'>Most Watched Tv by days</p>
            <div className='bordr w-100 mt-3'></div>

          </div>
          
         {trandingtv.splice(0,10).map((movie,index)=><Media key={index} term={movie}/>)}
          



        </div>

      
        <div className='row g-3 py-5'>
          <div className="col-md-4 ">
            
            <div className='bordr w-25 mb-3'></div>
            <h2 className='h3'>Tranding <br/> People <br/> to Watch now</h2>
            <p className='text-light text-opacity-50 mt-3'>Most Watched People by days</p>
            <div className='bordr w-100 mt-3'></div>

          </div>
          
         {trandingpeople.splice(0,10).map((person,index)=><Media key={index} term={person}/>)}
          



        </div>


    </>

  )
}
