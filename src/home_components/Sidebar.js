import React from 'react'
import '../styles/Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Playlists from './playlists';
import { Link } from "react-router-dom";

function Sidebar() {

  return (
    
    <div className='main_sidebar'>
      <img className='logoSidebar' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""/>
      <div className='sidebarOption'>
        <Link to="/" className="item">
          <HomeOutlinedIcon className='icon'/>          
          <h5 className='theme'>Home</h5>
        </Link>
        <div className="item">
          <SearchOutlinedIcon className='icon'/>
          <h5 className='theme'>Buscar</h5>
        </div>
        <div className="item">
          <LibraryMusicIcon className='icon'/>
          <h5 className='theme'>Tu biblioteca</h5>
        </div>
        <hr></hr>
      </div>
      <Playlists/>
    </div>

  )
}

export default Sidebar