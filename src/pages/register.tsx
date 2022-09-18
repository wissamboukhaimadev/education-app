import type { Component } from 'solid-js';
import { RegisterComponent } from '../components/auth';
import NavBar from '../helper/global-components/NavBar';

const Register: Component = () => {
    return (
        <div>
            <NavBar />
            <RegisterComponent />
        </div>
    )
}

export default Register;