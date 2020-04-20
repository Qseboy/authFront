import React, { Component, useState } from 'react';
import Cookies from 'js-cookie'
import './registration.css'


const Registration = (props) => {

    //установка состояния для форм
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [privileges, setPrivileges] = useState(false);



    // вызов метода register .then(data) => {setCred(data);} Для промисов, потому что метод register async(асинхронный)
    const submit = (event) => {
        let user = { login, email, password, privileges };
        props.setUsers(user)
        props.setCurrentUser(user); //For auto redirect to dashboard, after authorization

        let setUserCookies = JSON.stringify(user); //add cookies
        Cookies.set("user_1", setUserCookies);

        props.history.push('/dashboard')
    }

    console.log('privileges  ' + privileges)

    return (
        <div className="form">
            <div className='form__group'><input id="email" name="email" className="form__input" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input></div>
            <div className='form__group'><input id="login" name="login" className="form__input" type="text" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)}></input></div>
            <div className='form__group'><input id="password" name="password" className="form__input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input></div>
            <div className='form__group'><input id="privileges" name="privileges" className="form__input" type="checkbox" placeholder="privileges" value={privileges} onChange={e => setPrivileges(!privileges)}></input></div>
            <button className='btn' type='submit' onClick={submit}>Sing up</button>
        </div>
    );
}

export { Registration };
