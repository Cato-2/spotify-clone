import React, { useEffect} from "react";
import "./styles/App.css";
import Login from "./Login";
import Home from "./Home";
import { getTokenFromUrl } from "./Spotify";
import { useUserContext } from "./StateProvider";
import  SpotifyWebApi  from "spotify-web-api-js";  /* https://github.com/thelinmichael/spotify-web-api-node#development */
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from "./Auth/ProtectedRoute";
import  Tracks  from "./playlist/Tracks";

 /* https://developer.spotify.com/documentation/web-playback-sdk/guide/#prerequisites */


function App() {

  const spotify = new SpotifyWebApi(); //objeto
  const [{ token }, dispatch] = useUserContext(); 

  useEffect(() => {
    //useEffect se ejecuta cuando se renderiza el componente
    const _token = getTokenFromUrl.access_token;// reducer hook 
    
    if (_token) { //si _token es diferente de null
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); //actualiza el estado de spotify  
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        console.log(user)
      });
    }
  }, []);


  const queryClient = new QueryClient()

  return (
      <QueryClientProvider className="app" client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" 
                   element={
                          <ProtectedRoute>
                            <Home />
                          </ProtectedRoute>
                          } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/playlist/:id" element={
                          <ProtectedRoute>
                            <Tracks />
                          </ProtectedRoute>} exact/>
          </Routes>
        </Router>
     </QueryClientProvider>
  );

}

export default App;
