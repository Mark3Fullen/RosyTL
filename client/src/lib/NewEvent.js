import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const NewEvent = ( { user, homeClicked, setHomeClicked, setEvents } ) => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [cardTitle, setCardTitle] = useState("");
    const [cardSubtitle, setCardSubtitle] = useState("");
    const [cardDetailedText, setCardDetailedText] = useState("");
    const [url, setUrl] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/newform", {
            method: "POST",
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
          .then(() => setHomeClicked(true))
          .then(() => history.push("/"))


    }


    return (

        <div>

            <form onSubmit={handleSubmit}>
              <Stack spacing={1} alignItems="center">
                <p>Create a New Entry!</p>
                <TextField placeholder="Enter Year of Event" value ={title} onChange={e => setTitle(e.target.value)}/>
                <br/>
                <TextField placeholder="Enter Title of Event" value={cardTitle} onChange={e => setCardTitle(e.target.value)}/>
                <br/>
                <TextField placeholder="Enter Date of Event" value={cardSubtitle} onChange={e => setCardSubtitle(e.target.value)}/>
                <br/>
                <TextField multiline rows={5} placeholder="Enter Text of Event" value={cardDetailedText} onChange={e => setCardDetailedText(e.target.value)}/>
                <br/>
                <TextField placeholder="Enter Picture URL of Event" value={url} onChange={e => setUrl(e.target.value)}/>
                <br/>
                <Button variant="contained" type="submit">Submit</Button>
                <br/>
              </Stack>
            </form>

          <br/>
        </div>

    )

}

export default NewEvent