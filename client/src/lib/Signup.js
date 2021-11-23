import { useState } from 'react'
import { useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = ( { user, setUser, setIsLoggedIn } ) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            password: password,
            password_confirmation: passwordConfirmation,
            email: email,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
              setUser(user);
              setIsLoggedIn(true);
              history.push("/");
            });
          }
        });
      }

    return (
      <div>
        
            <form onSubmit={handleSubmit}>
            <Stack alignItems="center" spacing={1}>
                <p>Signup Here!</p>
                <br/>
                <TextField type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} />
                <br/>
                <TextField type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
                <br/>
                <TextField type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
                <br/>
                <TextField type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                <br/>
                <Button variant="contained" type="submit">Create Account</Button>
                <br/>
              </Stack>
            </form>
      </div>
    )

}

export default Signup