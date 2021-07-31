import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Main from './components/Main';
import Login from './components/Login';
import ContactUsPage from './components/ContactUsPage';
import './assets/main.css'
import { useState } from 'react';
import { Context } from './context/Context';
// the hoc
import { withNamespaces } from 'react-i18next';


function App() {
  
  const [loginModalShow, setLoginModalShow] = useState(false);


  const [userInfo, setUserInfo] = useState({name:null,email:null, locale:null, password:null});

  return (
    <>
      <Context.Provider value={{userInfo:userInfo, setUserInfo:setUserInfo}} >
        <Router>
          <Header setLoginModalShow = {setLoginModalShow}/>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/contact-us">
              <ContactUsPage />
            </Route>
          </Switch>
          <Login 
            show={loginModalShow}
            hideHandler={setLoginModalShow}/>
          <Footer />
        </Router>
      </Context.Provider>
    </>
  );
}

export default withNamespaces()(App);
