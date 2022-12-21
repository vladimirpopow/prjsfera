import React, {useEffect, useContext} from 'react';
import {Context} from './index';
import './App.css';
import LoginForm from './components/loginform';
import {observer} from 'mobx-react-lite';


function App() {
  const {store} =  useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
        store.checkAuth()
    }
}, [store])

if(!store.isAuth){
  <LoginForm/>
}

  return (
    <div className="App">
        <h1>{store.isAuth ? `Вы авторизованы под ${store.user.email}` : 'Авторизуйтесь' }</h1>
        <button onClick={()=>{store.logout()}}> Выйти</button>
    </div>
  );
}

export default observer(App);
