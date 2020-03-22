//外部APIサーバーにリクエストを投げるライブラリ
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//戻り値がプロミスになるため、asyncを扱う
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}


