import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
const API_URL = `http://localhost:5000/api`


export default class Store {
    isAuth = false
    isLoading = false

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }


    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false)
            this.setUser({});
        } catch (error) {
            console.log(error);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (error) {
            console.log(error);
        }
    }

    setLoading(bool){
        this.isLoading = bool
    }

}