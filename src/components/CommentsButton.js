import React, {useState} from "react";
import Comment from "./Comment"



function CommentsButton({commentsshown, setCommentsShown, comments}){

    function showComments(){
        console.log("Comments should be shown")
        setCommentsShown((commentsshown) => !commentsshown)

 
    }


    return (
        <div>
    <div>
        <button onClick={showComments}>{commentsshown ? "Hide Comments" : "Show Comments"}</button>

        </div>
        <div>
          <h2>{comments.length} Comments</h2>

          {comments.map(comment => <Comment  key={comment.id} comment={comment} />)}

    
    </div>
    </div>

        
    )




}



export default CommentsButton