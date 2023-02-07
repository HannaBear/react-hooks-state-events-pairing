import React from "react";

function UpButton({upvotes, setUpvotes}){

    function moreUpvote(){

        setUpvotes((upvotes) => upvotes +1)
        console.log("Upvote function fired")
    
    }



    return (
        <button onClick={moreUpvote}>{upvotes}👍</button>
    )
}

export default UpButton;