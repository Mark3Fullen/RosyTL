import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ProfileEvents from './ProfileEvents';

const Profile = ( { user, setUser, homeClicked, setHomeClicked, userClicked, setUserClicked } ) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userModding, setUserModding] = useState(false);

    function handleDeleteClick() {
        fetch(`users/${user.id}`, {
          method: "DELETE",
        })
        .then(() => history.push("/"))
        .then(() => setUser({}))
      }

    function handleUpdateSubmit(e) {
        e.preventDefault();
        fetch(`users/${user.id}`, 
        {method: "PATCH", headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ name: name, email: email })
        })
        .then(r => r.json())
        .then((res) => setUser(res))
        .then(() => history.push("/profile")
    )    }

    function handleModding() {
        setUserModding(!userModding)
    }

    return (

        <Container>
            <div>
            
            <Stack alignItems="center">
                <h4>Name: {user.name}</h4>
                
                <h4>Email: {user.email}</h4>

                <br/>

                <Button variant="primary" onClick={handleModding}>{!userModding ? "Modify Profile" : "End Modifying"}</Button>
            </Stack>

            <br/>
            
            {userModding ? <form onSubmit={handleUpdateSubmit}>

                <Stack alignItems="center">
                    <TextField type="text" placeholder="Update Name" value={name} onChange={e => setName(e.target.value)}/>
                    <TextField type="text" placeholder="Update Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <br/>
                    <Button variant="contained" type="submit">Update Profile</Button>
                    <br/>
                    <Button variant="contained" onClick={handleDeleteClick}>Delete Account</Button>
                </Stack>

                </form> : null}


            </div>

            <h3>Entries:</h3>

            <Container>
                <ProfileEvents user={user} setHomeClicked={setHomeClicked} setUserClicked={setUserClicked}/>
            </Container>

        </Container>

    )

}

export default Profile