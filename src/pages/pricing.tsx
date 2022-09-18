import type { Component } from 'solid-js';
import { PricingComponent } from '../components/pricing';
import NavBar from '../helper/global-components/NavBar';

const Pricing: Component = () => {
    return (
        <div>
            <NavBar />
            <PricingComponent />
        </div>
    )
}

export default Pricing;