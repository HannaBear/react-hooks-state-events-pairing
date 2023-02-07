import React from "react";

function DownButton({downvotes, setDownvotes}){

function moreDownvote(){

    setDownvotes((downvotes) => downvotes-1)

}



    return (
        <button onClick={moreDownvote}>{downvotes}👎</button>
    )
}

export default DownButton;