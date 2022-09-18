import type { Component } from 'solid-js';
import { HopeProvider } from '@hope-ui/solid'

import Pages from './router/pages';
import NavBar from './helper/global-components/NavBar';

import Footer from './helper/Footer/Footer';
import { config } from './theme/hope-ui_theme';


const App: Component = () => {

  return (
    <HopeProvider config={config}>

      <Pages />
      <Footer />
    </HopeProvider>
  );
};

export default App;
