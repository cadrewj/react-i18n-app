import React, { Suspense, useState } from "react";
import i18n from "./i18n"
import {Container } from 'react-bootstrap';
import './App.css';
import Loading from "./components/Loading"
import Greeting from './components/Greeting';
import Navigation from './components/Navigation';
import Text from './components/Text';
import LocalContext from "./LocaleContext";


function App() {
  const[locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng)=>setLocale(i18n.language))
  return (
    <LocalContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading/>}>
        <Navigation/>
        <Container>
          <Greeting/>
          <Text/>
        </Container>
    
      </Suspense>
    </LocalContext.Provider>
  );
}

export default App;
