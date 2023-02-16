import React from 'react'
import '../styles/Footer.css'
import { useUserContext } from "../StateProvider";
import { useQuery } from 'react-query'
import axios from 'axios'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Footer() {

  const [ {token}, dispatch] = useUserContext();

  const fetchcurrentplaying = async () => {
    const response = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = response.data;
    console.log("current playing: ", data)
    return data;
  }

  const { isError, isLoading, data, mutate, refetch } = useQuery(['currentplaying'], fetchcurrentplaying, {staleTime: 60})

  return (
    <div className='main_footer'>
      <div className='current_playing'>
          {data && (
            <div className='current_playing_info'>
              <img className="playing_album" src={data.item.album.images[0].url} alt=""/>
              <div className='current_playing_info_text'>
                <h4 className="current_track">{data.item.name}</h4>
                <p className="current_artist">{data.item.artists.map((artist) => artist.name).join(", ")}</p>
              </div>
              <div className='like2'>
                <FavoriteBorderIcon className='like2'/>
              </div>
            </div>
          )
          }
      </div>
      <div className='footer_controls'>

      </div>
      <div className='footer_volume'>

      </div>  
    </div>
  )
}

export default Footer