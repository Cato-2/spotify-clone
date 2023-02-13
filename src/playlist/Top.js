import React from 'react'
import { useUserContext } from "../StateProvider";
import '../styles/Top.css'
import { useQuery } from 'react-query'
import axios from 'axios'


function Top() {
const [ { user, selected, token } ] = useUserContext();


  return (
    <div >
        {selected &&  
            <div className="main_top">
                <img className="playlist_img" src={selected.images[0].url} alt=""/>
                <div className="playlist_info">
                    <h2 className="playlist_nombre">{selected.name}</h2>
                    <p  className="playlist_desc">{selected.description}</p>
                    <div className="playlist_owner">
                        <p  className="owner_img" src={user.images[0].url}></p>
                        <p  className="owner_name">{selected.owner.display_name}</p>
                        
                        <p  className="number_tracks"> &#9679;  {selected.tracks.total} canciones</p>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Top