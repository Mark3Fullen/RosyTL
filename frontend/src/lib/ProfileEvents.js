import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
 
function ProfileEvents( { user, setHomeClicked, setUserClicked } ) {
    const history = useHistory();
    const [userEvents, setUserEvents] = useState(user.events);
    const [eventModding, setEventModding] = useState(false);
    const [title, setTitle] = useState("");
    const [cardTitle, setCardTitle] = useState("");
    const [cardSubtitle, setCardSubtitle] = useState("");
    const [cardDetailedText, setCardDetailedText] = useState("");
    const [url, setUrl] = useState("");

    function handleEventDelete(e, event) {
        console.log(event)
        e.preventDefault();
        fetch(`events/${event.id}`, {
            method: "DELETE",
        })
        .then(() => {
                    setUserClicked(true);
                    setHomeClicked(true)
                    history.push("/")})
    }

    function handleEventUpdate(e, event) {
        e.preventDefault();
        fetch(`events/${event.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                cardTitle,
                cardSubtitle,
                cardDetailedText,
                url,
                user_id: user.id
            }),
        })
        .then(r => r.json())
        .then(() => {setHomeClicked(true)
                    setUserClicked(true)})
        .then(() => history.push("/"));
    }

    function handleModding() {
        setEventModding(!eventModding)
    }

    console.log(userEvents);

    return (
        <Container>
            {userEvents.map((event) => {
                const eventInfo =
                <Stack>
                    <h3>{event.title}</h3>
                    <p>{event.cardTitle}</p>
                    <p>{event.cardSubtitle}</p>
                    <p>{event.cardDetailedText}</p>
                    <p>{event.url}</p>
                    <br/>
                    <Button variant="primary" onClick={handleModding}>{!eventModding ? "Modify Entry" : "End Modifying"}</Button>
                    <br/>
                    
                    {eventModding ? <form onSubmit={e => handleEventUpdate(e, event)}>
                        <Stack alignItems="center" spacing={1}>
                            <TextField type="text" placeholder="Update Year" value={title} onChange={e => setTitle(e.target.value)}/>
                            <TextField type="text" placeholder="Update Title" value={cardTitle} onChange={e => setCardTitle(e.target.value)}/>
                            <TextField type="text" placeholder="Update Event Date" value={cardSubtitle} onChange={e => setCardSubtitle(e.target.value)}/>
                            <TextField multiline type="text" placeholder="Update Content" value={cardDetailedText} onChange={e => setCardDetailedText(e.target.value)}/>
                            <TextField type="text" placeholder="Update Picture" value={url} onChange={e => setUrl(e.target.value)}/>
                            <br/>
                            <Button variant="contained"type="submit">Submit Update</Button>
                            <br/>
                            <Button variant="contained"onClick={e => handleEventDelete(e, event)}>Delete Blog</Button>
                            </Stack>
                        </form> : null}

                </Stack>
                return eventInfo
            })}
        </Container>
    )
}

export default ProfileEvents;