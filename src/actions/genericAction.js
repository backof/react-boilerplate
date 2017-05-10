import axios from "axios";

export function fetchAvailability() {
  return function(dispatch) {
    var key = 'JfG4CBn23F9qGHstpoklCB:OMqdfGb47Jo48fhld9ehxlgues';
    //var key = 'G45HMRsCS5ivw7eANEwg6w:7I5fqSfyRrCGh2izTwRVxg';
    axios.get('http://localhost:5000/availability', { headers: {'Authorization':'Bearer ' + key} })
      .then((response) => {
        dispatch({type: "FETCH_AVAILABILITY_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_AVAILABILITY_REJECTED", payload: err})
      })
  }
}

/*
export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
*/
