import type { Component } from 'solid-js';
import { ContactComponent } from '../components/Contact';
import NavBar from '../helper/global-components/NavBar';

const Contact: Component = () => {
    return (
        <div>
            <NavBar />
            <ContactComponent />
        </div>
    )
}

export default Contact;