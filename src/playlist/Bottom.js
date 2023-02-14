import '../styles/Bottom.css'
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import axios from 'axios'
import { useUserContext } from "../StateProvider";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Bottom (){
    const [{ token }, dispatch] = useUserContext();
    const { id } = useParams();

    const fetchtracksbyplaylist = async () => {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        console.log("playlist: ", data)
        return data;
    }
    const { isError, isLoading, data, mutate, refetch } = useQuery(['tracks'], fetchtracksbyplaylist, {staleTime: 5}) 

    const converterms = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    const converterdate = (date) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const newdate = new Date(date);
        const day = newdate.getDate();
        const month = newdate.getMonth();
        const year = newdate.getFullYear();
        return `${day} ${monthNames[month]}, ${year}`;
    }
    return (
        <div className='main_bottom'>
            <div className='col'>
                <div className='head'>
                    <p className='n'>#</p>
                    <p className='titulo'>TÍTULO</p>
                    
                </div>          
            {data && data.items.map((track, n) => {
                n=n+1;
                return(
                    <div className='track' key={track.track.id}>
                        <p className='number'>{n}</p>
                        <img className="album_img" src={track.track.album.images[1].url} alt=""/>
                        <div className='track_info'>
                            <p className='song'>{track.track.name}</p>
                            <p className='artist'>{track.track.artists.map((artist) => artist.name).join(", ")}</p>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            <div className='col'>
                <div className='head'>
                    <p className=''>ÁLBUM</p>
                </div> 
                {data && data.items.map((track) => {
                return(
                    <div className='info' key={track.track.id}>
                        <p className='album'>{track.track.album.name}</p>
                    </div>
                    )
                })
            }  
            </div>
            <div className='col'>
                <div className='head'>
                    <p className=''>AGREGADO EL</p>
                </div>  
                {data && data.items.map((track) => {
                return(
                    <div className='info' key={track.track.duration_ms}>
                        <p className='album'>{converterdate(track.added_at.slice(0, 10))}</p>
                    </div>
                    )
                })
            }  
            </div>
            <div className='col'>
                <p className='head'>
                    <AccessTimeIcon/>
                </p> 
                {data && data.items.map((track) => {
                return(
                    <div className='info' key={track.track.duration_ms}>
                        <p className='album'>{converterms(track.track.duration_ms)}</p>
                    </div>
                    )
                })
            }  
            </div>

        </div>
    )
}
