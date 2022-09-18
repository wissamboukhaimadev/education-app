import type { Component } from 'solid-js';
import { DashboardHome, NavigationBar } from './sections';

const Dashboard: Component = () => {
    return (
        <div>
            <NavigationBar />

            <DashboardHome />
        </div>
    )
}

export default Dashboard;