import { BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Home from './lib/Home';
import Navbar from './lib/Navbar';
import Signup from './lib/Signup';
import Profile from './lib/Profile';
import Login from './lib/Login';
import NewEvent from './lib/NewEvent';
import About from './lib/About';

function App() {
  const [user, setUser] = useState({});
  const [events, setEvents] = useState([]);
  const [homeClicked, setHomeClicked] = useState(true);
  const [userClicked, setUserClicked] = useState(false);

  useEffect(() => {
    fetch("/data")
      .then((r) => r.json())
      .then(e => setEvents(e))

  }, [homeClicked]);

  useEffect(() => {
    fetch(`/me`)
    .then((r) => r.json())
    .then((res) => setUser(res))
  }, [userClicked])

  function homeClickCheckered(homeClicked) {
      if (homeClicked === true) {
        console.log("Thanks, bruh")
        setHomeClicked(false);
      }
  }

  function userClickCheckered(userClicked) {
    if (userClicked === true) {
      console.log("Thanks, dawg")
      setUserClicked(false);
    }
  }

  homeClickCheckered(homeClicked);
  userClickCheckered(userClicked);
  

  console.log(user);
  // console.log(events);

  return (
    <div style={{ background: 'linear-gradient(white, red)', height: '200'}}>

    <BrowserRouter className="App">
      <Navbar user={user} setUser={setUser} homeClicked={homeClicked} setHomeClicked={setHomeClicked}/>

      <br/>
      
      <Route exact path="/" className="Home">
        <Home user={user} setUser={setUser} events={events} setEvents={setEvents}/>
      </Route>

      <Route path="/signup" className="Signup"> 
        <Signup user={user} setUser={setUser} />
      </Route>

      <Route path="/profile" className="Profile">
        <Profile user={user} setUser={setUser} event={events} setEvents={setEvents} homeClicked={homeClicked} setHomeClicked={setHomeClicked} userClicked={userClicked} setUserClicked={setUserClicked}/>
      </Route>

      <Route path="/login" className="Login">
        <Login user={user} setUser={setUser} setHomeClicked={setHomeClicked}/>
      </Route>

      <Route path="/newevent" className="NewEvent">
        <NewEvent user={user} homeClicked={homeClicked} setHomeClicked={setHomeClicked}/>
      </Route>

      <Route path="/about" className="About">
        <About/>
      </Route>

    </BrowserRouter>

    </div>
  );
}

export default App;
