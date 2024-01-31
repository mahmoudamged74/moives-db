import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Helmet} from "react-helmet";
export default function Details() {

  let { id, mediatype } = useParams()

  const [datafilm, setdatafilm] = useState({})

  async function getdatafilm(id, media) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=4d1da0dc46ba1f7010a3b83634c07d77&language=en-US`)
    setdatafilm(data)
  }
  useEffect(() => {

    getdatafilm(id, mediatype)

  }, [])

  let path = 'https://image.tmdb.org/t/p/w500'

  return (
    <>
<Helmet>
   <meta charSet="utf-8" />
   <title>{datafilm.name?datafilm.name:datafilm.title}</title>
   
</Helmet>

      <div className='row py-5'>
        <div className='col-md-3'>
          <div className='movie position-relative '>
            {datafilm.vote_average ? <div className='position-absolute top-0 end-0 bg-info p-2'>{datafilm.vote_average.toFixed(1)}</div> : ''}
            {datafilm.poster_path ? <img src={path + datafilm.poster_path} alt="" className='w-100 h-100' /> : <img src={path + datafilm.profile_path} alt="" className='w-100 h-100' />}
          </div>

        </div>


        <div className='col-md-9 mt-4 m-md-0'>
          {mediatype === 'person' ? <div><p>name: {datafilm.name}</p>
            <p>{datafilm.known_for_department}</p>
            <p>popularity: {datafilm.popularity}</p>
            <p>birthday: {datafilm.birthday}</p>
            <p>place_of_birth: {datafilm.place_of_birth}</p>
          </div> : <div><h3 className='h6 my-2 '>{datafilm.title} {datafilm.name}</h3>
            <p className='py-2 text-opacity-50 text-light'>{datafilm.tagline}</p>
            <p >vote: {datafilm.vote_average}</p>
            <p className='py-1 '>vote-count: {datafilm.vote_count}</p>
            <p>popularity: {datafilm.popularity}</p>
            <p className='py-1 '>release_date: {datafilm.release_date}</p>
            <p className='py-2 text-opacity-50 text-light'>{datafilm.overview}</p></div>}


        </div>
      </div>


    </>
  )
}
