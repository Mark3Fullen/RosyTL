import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const Login = ( { user, setUser, setHomeClicked } ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {method: "POST", headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( {id: user.id, email: email, password: password} ),
    }).then((r) => {
        if (r.ok) {
            r.json().then(setUser)
            setHomeClicked(true)
            history.push("/");
        }
    })
    }

    return (

        <div>
            
            <form onSubmit={handleSubmit}>
            <Stack spacing={1} alignItems="center">
                <p>Welcome Back! Login Here!</p>
                <br/>
                <TextField type="text" placeholder="Enter Email" value={email} onChange={e =>setEmail(e.target.value)}/>
                <br/>
                <TextField type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <br/>
                <Button variant="contained" type="submit">Login</Button>
                <br/>
            </Stack>
            </form>

        </div>

    )

}

export default Login