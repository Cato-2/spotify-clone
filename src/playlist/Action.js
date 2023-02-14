import React from 'react'
import '../styles/Action.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Action() {
  return (
    <div className='main_action'>
      <div className='left'>
        <div className='itemAction'>
          <div className='play'><PlayCircleIcon className='play'/></div>
        </div>
        <div className='itemAction'>
          <div className='like'><FavoriteBorderIcon className='like'/></div>
        </div>  
        <div className='itemAction'>
          <div className='more'><MoreHorizIcon className='more'/></div>
        </div>
      </div>
      <div className='right'>
        <div className='itemAction'>
          <div className='share'><SearchIcon/></div>
        </div>
        <div className='itemAction'>
          <div className='filter'>Orden personalizado <ArrowDropDownIcon/></div>
        </div>
      </div>

    </div>
  )
}

export default Action