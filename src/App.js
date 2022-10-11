import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
  children: [
    {path: '/topic', element: <Topic></Topic>},
    {path: '/statistics', element: <Statistics></Statistics>},
    {path: '/blog', element: <Blog></Blog>}
  ]},
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
