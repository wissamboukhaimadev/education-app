import type { Component } from 'solid-js';
import { LoginComponent } from '../components/auth';
import NavBar from '../helper/global-components/NavBar';

const Login: Component = () => {
    return (
        <div>
            <NavBar />
            <LoginComponent />
        </div>
    )
}

export default Login;