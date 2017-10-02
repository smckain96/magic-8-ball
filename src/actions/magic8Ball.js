import axios from 'axios';

export const magic8Ball = () => {
  return {
    type: 'MAGIC_8_BALL',
    payload: axios.get(`https://8ball.delegator.com/magic/JSON/Will%20I%20ever%20give%20you%20up%3F`)
  }
}
