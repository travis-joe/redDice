/**
 * Created by Administrator on 2016/8/2.
 */
import axios from 'axios'
export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('/api/users',userData)
    }
}