import React from 'react'
import Sidebar from '../home_components/Sidebar'
import BodyTracks from './BodyTracks'
import Footer from '../home_components/Footer'


export default function Tracks() {
    return (
        <div className="main">
          <div className="main_">
            <Sidebar /> {/* etiqueta siempre tiene que ir con primera letra mayuscula */}
            <BodyTracks />
          </div>
          <Footer/>
        </div>
      );
}
