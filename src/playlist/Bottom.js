import '../styles/Bottom.css'
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import axios from 'axios'
import { useUserContext } from "../StateProvider";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Action from './Action'

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


    useEffect(() => {
        refetch();
    }, [id])

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
            <div>
                <Action/>
            </div>
            <div className="head">
                <p className="n">#</p>
                <p className="title col">Título</p>
                <p className="album col">Álbum</p>
                <p className="date col">Fecha de adición</p>
                <p className="time col">Duración</p>
            </div>
            <hr/>
            <div className="tracks">
                {data && data.items.map((track, n) => {
                    n=n+1;
                    return(
                        <div className="track" key={n}>
                            <p className="n">{n}</p>
                            <div className="info">
                                <img className="track_img" src={track.track.album.images[0].url} alt=""/>
                                <div className="track_info">
                                    <p className="track_name">{track.track.name}</p>
                                    <p className="track_artist">{track.track.artists[0].name}</p>
                                </div>  
                            </div>
                            <p className="album">{track.track.album.name}</p>
                            <p className="date">{converterdate(track.added_at)}</p>
                            <p className="time">{converterms(track.track.duration_ms)}</p>
                        </div>
                    )
                })}
            
            </div>
        </div>
    )
}
