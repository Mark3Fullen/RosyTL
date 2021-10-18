import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import YRose from '../IMGs/ToorkyBoi.jpg'
import LRose from "../IMGs/LancyBoi.jpg"


const Navbar = ( {user, setUser, homeClicked, setHomeClicked, setIsLoggedIn, isLoggedIn} ) => {
    const history = useHistory();

    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser({});
                history.push("/");
            }
        })
    }


    return (

        <Stack alignItems="center">

            <Stack alignItems="center" spacing={1} direction="row">
                <img src={LRose} height="40" width="40"/>
                <h1 style={{ color: "red", background: '3px solid black'}}>Rosy TL</h1>
                <img src={YRose} height="40" width="40"/>
            </Stack>

            <br/>
                {user.length > 0 ? <p>Welcome, {user.name}</p> : null}
            <br/>

        <nav className="NavBar">

            <NavLink to="/about">
                <Button variant="outlined">About</Button>
            </NavLink>

            <NavLink to="/" onClick={e => setHomeClicked(!homeClicked)}>
                <Button variant="outlined">Home</Button>
            </NavLink>

            {isLoggedIn > 0 ? (
                <NavLink to="/newevent">
                    <Button variant="outlined">New Entry</Button>
                </NavLink>
            ) : null}

            {!isLoggedIn ? (
            <NavLink to="/signup">
                <Button variant="outlined">Sign Up</Button>
            </NavLink>
            ) : null}

            {isLoggedIn ? (
            <NavLink to="/profile">
                <Button variant="outlined">Profile</Button>
            </NavLink>
            ) : null}

            {!isLoggedIn ? (
                <NavLink to="/login">
                    <Button variant="outlined">Login</Button>
                </NavLink>
            ) : null}

            {isLoggedIn > 0 ? (
                <NavLink to="/">
                    <Button variant="outlined" onClick={setIsLoggedIn(false)} onClick={handleLogoutClick}>Logout</Button>
                </NavLink>
            ) : null}

        </nav>

        </Stack>

    )

}

export default Navbar;