import axios from 'axios';

export const magic8Ball = (question) => {
  return {
    type: 'MAGIC_8_BALL',
    payload: axios.get(`https://8ball.delegator.com/magic/JSON/${question}`)
  }
}
