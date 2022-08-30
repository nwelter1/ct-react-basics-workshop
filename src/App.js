import './App.css';
import Blog from './components/Blog';
import Counter from './components/Counter';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      text: 'Hello, Susan!',
      timestamp: 'a minute ago',
      author: {
        username: 'brian',
      },
    },
    {
      id: 3,
      text: 'Hello, Susan!',
      timestamp: 'a minute ago',
      author: {
        username: 'brian',
      },
    },
    {
      id: 4,
      text: 'Hello, Susan!',
      timestamp: 'a minute ago',
      author: {
        username: 'brian',
      },
    },

    
  ];
  return (
    <div>
      <Header />
      <h1>Hello World!</h1>
      {posts.map(post => {
        return(
        <Blog post={post} key={post.id} />
        )
      })}
      <Counter />
    </div>
    
  );
}

export default App;
