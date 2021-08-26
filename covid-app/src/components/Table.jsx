import axios from 'axios'
import React from 'react'

const Table = () => {
      const countryWiseApiData = async()=>{
            const res = await axios.get(" https://covid19.mathdro.id/api")
            console.log(res)
      }
      countryWiseApiData()
      return (
            <div>
                 tabke 
            </div>
      )
}

export default Table
