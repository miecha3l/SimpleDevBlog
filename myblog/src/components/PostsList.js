import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export const posts = [
    {
        'title': 'Idea behind my project manager',
        'file': 'project_manager.md',
        'index': 1
    }
];

const PostsList = () => {
    
    const postList = posts.map(p => {
        let path='posts/' + p['title'].replace(' ', '+');
        return <li key={p['index']}><Link className="post-list-link" to={path}>{p['title']}</Link></li>
    });

    return (
        <div>
            <h1>Posts</h1>
            <ul className="post-list">{postList}</ul>
        </div>
    );
}

export default PostsList;