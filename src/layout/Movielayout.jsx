import React from 'react'
import Movienavbar from '../components/Navbar/Movienavbar'

const Movielayout = (Component) => ({...props}) =>  {
  return (
    <div>
      <Movienavbar/>
     <Component {...props}/> 
    </div>
  )
}

export default Movielayout