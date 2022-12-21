import React, {useState, useContext} from 'react';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} =  useContext(Context);

    return (
        <div>
            <input type="text" 
                   onChange={e => setEmail(e.target.value)} 
                   value={email}
                   placeholder='Email'/> 

            <input type="password" 
                    onChange={e => setPassword(e.target.value)} 
                    value={password}
                    placeholder='пароль'/>

            <button onClick={()=>{return store.login(email, password)}}>Войти</button>
            <button onClick={()=>{return store.registration(email, password)}}>Зарегистрироваться</button>
                   
        </div>
    )
}

export default observer(LoginForm);