import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useData(url) {


    const [trandingFilm, settrandingFilm] = useState([])
    const [isloading, setisloading] = useState('false')
   
  
    async function getTranding() {
        setisloading(true)

      let { data } = await axios.get(url)

      settrandingFilm(data.results)
      setisloading(false)
     
    }
    useEffect(() => {

      getTranding()
  
    } , [ ])
 

  return {trandingFilm,isloading}

}
