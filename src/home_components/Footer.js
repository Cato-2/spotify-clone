import React, {useState} from 'react'
import '../styles/Footer.css'
import { useUserContext } from "../StateProvider";
import { useQuery } from 'react-query'
import axios from 'axios'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import RepeatIcon from '@mui/icons-material/Repeat';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SpeakerIcon from '@mui/icons-material/Speaker';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

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
  const [state, setstate] = useState(false)
  const { isError, isLoading, data, mutate, refetch } = useQuery(['currentplaying'], fetchcurrentplaying, {staleTime: 60})

  const setVolume = (e) => {
    console.log(e.target.value)
    axios.put(`https://api.spotify.com/v1/me/player/volume?volume_percent=${e.target.value}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <div className='main_footer'>
      <div class="left">
      <div className='current_playing'>
          {data && (
            <div className='current_playing_info'>
              <img className="playing_album" src={data.item.album.images[0].url} alt=""/>
              <div className='current_playing_info_text'>
                <h4 className="current_track">{data.item.name}</h4>
                <p className="current_artist">{data.item.artists.map((artist) => artist.name).join(", ")}</p>
              </div>
            </div>
            )
          }
      </div>
      <div className='like2'>
        <FavoriteBorderIcon className='like2'/>
      </div>
      </div>
      
      <div className='footer_controls'>
        <div className='footer_controls_buttons'>
          <div className="item"> 
              <ShuffleIcon className="aleatorio"/>
          </div>
          <div className="item"> 
              <SkipPreviousIcon className="back"/>
          </div>
          <div className="item" > 
            { state ? <PauseCircleIcon className='play2'/> : <PlayCircleIcon className='play2'/> }
          </div>
          <div className="item"> 
            <SkipNextIcon className='next'/>
          </div>
          <div className="item"> 
            <RepeatIcon className='repeat'/>
          </div>
        </div>
        <div className='footer_controls_progress'>
            
        </div>
      </div>

      
      <div className='footer_volume'>
          <div>
            <QueueMusicIcon className='queue'/>
          </div>
          <div>
            <SpeakerIcon className='devices'/>
          </div>
          <div className='vol' ng-class="{'disabled-range':isDisabled()}">
            <VolumeUpIcon className='sound'/> <input className="volume" type="range" min="0" max="100" onMouseUp={(e) => setVolume(e)} class="slider" id="myRange" ng-disabled="isDisabled()"/>
          </div>
      </div>  
    </div>
  )
}

export default Footer