import React from 'react'
import '../App.css'
import NavBar from '../components/Nav'
import PostsList from '../components/PostsList'

const PostsListPage = () => {
    return (
        <div className="App">
            <NavBar />
            <PostsList />
        </div>
    );
}

export default PostsListPage;