import React, { Component, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function BodyTracks (){
  const { id } = useParams();

  useEffect(() => {
      console.log(id)
  }, [id])

    return (
        <div className='main_body'>
            <h1>List of tracks</h1>
        </div>
    )
}
