import axios from 'axios';
const apiBaseURL = 'http://localhost:5000' 
const instance = axios.create({
    baseURL: apiBaseURL,
    timeout: 10000,
    headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache'}
});

export const item = function item(){
    return instance.get('/items');
}
export const login = function login(param){
    return instance.post('/login', param);
}

export const logout = function logout(){
    return instance.get('/logout');
}

