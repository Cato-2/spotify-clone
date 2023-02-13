import React, {useEffect} from 'react'
import '../styles/Bottom.css'
import { useUserContext } from "../StateProvider";
import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';

function Bottom() {
    let { id } = useParams();

    useEffect(() => {
        console.log(id)
    }, [id])
    
    return (
        <div className='main_bottom'>
        </div>
    )
}


export default Bottom