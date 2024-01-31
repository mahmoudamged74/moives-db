import React from 'react'
import {Link} from'react-router-dom'


export default function Media({term}) {

    let path='https://image.tmdb.org/t/p/w500'
  return (<>

   
    <div className='col-sm-4 col-md-2 '>
      <Link to={`/details/${term.id}/${term.media_type}`}> 
        <div className='movie position-relative '>
            {term.poster_path?<img src={path+term.poster_path} alt="" className='w-100 h-100'/>:<img src={path+term.profile_path} alt="" className='w-100 h-100'/>}
            <h3 className='h6 my-3 text-center'>{term.title} {term.name}</h3> 
            {term.vote_average? <div className='position-absolute top-0 end-0 bg-info p-2'>{term.vote_average.toFixed(1)}</div>:''}
        </div>
      </Link>
    </div>
       
 </>
  )
}
