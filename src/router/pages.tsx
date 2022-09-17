import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router'
import NotFound from '../components/404_Page/NotFound';

import { HomePage, ContactPage, PricingPage, RegisterPage, LoginPage } from '../pages'

const Pages: Component = () => {
    return (
        <Routes>
            <Route path='/' component={HomePage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/pricing' component={PricingPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='*' component={NotFound} />
        </Routes>
    )
}

export default Pages;