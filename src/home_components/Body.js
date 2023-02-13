import React, {useEffect} from 'react'
import '../styles/Body.css'
import { useUserContext } from "../StateProvider";
import Top from '../playlist/Top';
import Bottom from '../playlist/Bottom';


function Body() {
  return (
    <div className='main_body'>
      <h1>Home</h1>
    </div>
  )
}

export default Body