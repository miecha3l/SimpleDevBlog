import React from 'react'
import '../App.css'
import NavBar from '../components/Nav'
import {posts} from '../components/PostsList'
import ReactMarkdown from 'react-markdown';

class PostPage extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            'title': props.match.params['title']
        };

    }

    async componentDidMount() {
        const importAll = (r) => r.keys().map(r);
        const allPosts = importAll(require.context('../posts', false, /\.md$/))

        const postHeader = posts.find(p => p['title'].replace(' ', '+') === this.state.title);
        
        let postFile = allPosts.find(p => {
            let fileTitle = p.split('/')[3].split('.')[0] + '.md';
            if(fileTitle === postHeader['file']) return p;
        });

        let postContent = await fetch(postFile).then(res => res.text());
        this.setState(state => ({...state, postContent}));
    }

    render(){
        return (
            <div className="App">
                <NavBar />
                <div className="post-container">
                    <ReactMarkdown source={this.state.postContent} />
                </div>
            </div>
        )
    }
}

export default PostPage;