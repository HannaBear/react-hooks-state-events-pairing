


function Comment ({comment}){

    console.log(comment)


    return (

        <div>
        <h3>{comment.user}</h3>
          {comment.comment}
        </div>
    )

}

export default Comment