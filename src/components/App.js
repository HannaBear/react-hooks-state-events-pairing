import React, {useState} from "react";
import UpButton from "./UpButton"
import DownButton from "./DownButton"
import video from "../data/video.js";
import CommentsButton from "./CommentsButton";





function App() {
  console.log("Here's your data:", video);

  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState (video.downvotes)
  const [commentsshown, setCommentsShown] = useState(true)

  const vanishComments = () => {
    setCommentsShown(!commentsshown)
}

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <UpButton upvotes={upvotes} setUpvotes={setUpvotes}/> <DownButton downvotes={downvotes} setDownvotes={setDownvotes}/>
      <br></br>
      <br></br>
      <CommentsButton onClick={vanishComments} comments={video.comments} commentsshown={commentsshown} setCommentsShown={setCommentsShown}/>
    
    
    </div>


  );
}

export default App;
