import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Cats = () => {
    const [posts, setPosts] = useState([]);
    const getFacts = () =>{
        axios.get('https://cat-fact.herokuapp.com/facts')
            .then((response) =>{
                let facts = response.data;
                setPosts(facts);
            })
    }

    useEffect(() => {
        getFacts();
    },[])
    console.log(posts)
    return (
        <div>
            {posts.map((post, index) => (
                <p key={index}>{post.text}</p>
            ))}
        </div>
    );
};

export default Cats;