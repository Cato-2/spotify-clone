export const initialState = {
  //estado inicial
  user: null,
  playlists: [],
  playing: false,
  item: null,
  selected: null,
  selectedTracks: null,
  // remove after developing
  token:null,
};

export const reducer = (state, action) => {
  //action es un objeto que tiene un type y un payload
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user, //modifica el estado de user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token, //modifica el estado de token
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists, //modifica el estado de playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly, //modifica el estado de discover_weekly
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.selected, //modifica el estado de selected
      };
    default:
      //si no se cumple ninguna de las anteriores, retorna el estado
      return state;
  }
};
