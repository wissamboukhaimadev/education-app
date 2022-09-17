import { Heading } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import ContactForm from './components/ContactForm';

const Contact: Component = () => {
    return (
        <div class='py-10 px-10'>
            <Heading size='3xl'>Get Help With Us</Heading>
            <Heading class='py-5' size='xl'>Share Any Problem, questions or anything you Want.</Heading>
            <ContactForm />
        </div>
    )
}

export default Contact;