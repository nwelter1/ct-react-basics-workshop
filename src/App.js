import './App.css';
import Blog from './components/Blog';
function App() {
  const current_user = 'Danni';
  const posts = [
    {
      id: 1,
      text: 'Hello, world!',
      timestamp: 'a minute ago',
      author: {
        username: 'susan',
      },
    },
    {
      id: 2,
      text: 'Hello, world!',
      timestamp: 'a minute ago',
      author: {
        username: 'susan',
      },
    },
    
  ];
  return (
    <div>
      <h1>Hello World!</h1>
      {posts.map(post => {
        return(
        <Blog post={post}/>
        )
      })}
      
    </div>
    
  );
}

export default App;
