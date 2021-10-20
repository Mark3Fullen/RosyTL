import React from "react"
import { Chrono } from "react-chrono"
import { useState } from "react"

const Home = ( {events, user} ) => {
  const [content, setContent] = useState("");

    const sortedEvents = events.sort(function(a,b) { return a.title - b.title })

    let eventArray = [];

    sortedEvents.forEach(e => { 
      const event = {
              id: e.id,
              user_id: e.user_id,
              title: e.title,
              cardTitle: e.cardTitle,
              cardSubtitle: e.cardSubtitle,
              cardDetailedText: e.cardDetailedText,
              media: {
                type: "IMAGE",
                source: {
                  url: e.url
                }
              }
          }
          eventArray.push(event)
    } )

    function handleCommentSubmit(e, event) {
      console.log(content)
      e.preventDefault()
      fetch("/comments", {method: "POST", headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
                          user_id: user.id,
                          event_id: event.id,
                          content: content
                        }),
    }).then(r => r.json())
    }

    function handleCommentChange(e) {
      setContent(e.target.value)
    }

    const eventComments = sortedEvents.map(event => {
      let commentCard = 
      <div>
        <p>{event.cardDetailedText}</p>
        <h5>Comments:</h5>
        {event.comments.length > 0 ? event.comments.map((comment) => {return <p>{comment.content}</p>}) : <p>No comments here</p>}
        {Object.keys(user).length > 0 ? <form onSubmit={e => handleCommentSubmit(e, event)}>
          <input type="text" placeholder="Add your comments here" onChange={handleCommentChange}/>
          <button type="submit">Add comment</button>
        </form> : null}
      </div>
      return commentCard;
  }
  )

    return ( 
        <div style={{ width: "800", height: "700"}}>
            {events.length > 1 ? 
              <Chrono items={eventArray} cardHeight="345" mode="HORIZONTAL" allowDynamicUpdate="true" hideControls="true" theme={{ 
                primary: "white",
                secondary: "red",
                cardBgColor: "",
                cardForeColor: "",
                titleColor: "white"
              }}>
                {/* {eventComments} */}
              </Chrono> : <p>Loadin................................................................</p>}
        </div>
    )
}

export default Home;