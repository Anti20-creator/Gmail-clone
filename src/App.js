import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/Counter';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import EmailList from './EmailList'
import Mail from './Mail'
import SendMail from './SendMail'
import { useDispatch, useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])
  return (
    <Router>

      {!user ? (<Login />) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
