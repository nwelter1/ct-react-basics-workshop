export default function Blog({ post }) {
    // return(
    //     <div>
    //         {props.posts.map(post =>{
    //             return(
    //                 <p>
    //                     <b>{post.author.username}</b> &mdash; {post.timestamp}
    //                     <br />
    //                     {post.text}
    //                 </p>
    //             )
    //         })}
    //         <p>Here is our prop number: {props.number}</p>
    //         <p>Here is our prop name: {props.name}</p>
    //     </div>
    // )
        return(
            <p>
                <b>{post.author.username}</b> &mdash; {post.timestamp}
                <br />
                {post.text}
            </p>
        )
    
}