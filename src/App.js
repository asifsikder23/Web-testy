import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import StartQuiz from './components/StartQuiz/StartQuiz';
import Statics from './components/Statics/Statics';

import Topic from './components/Topic/Topic';

function App() {
  const router = createBrowserRouter([

    {path: '/',
    element: <Main></Main>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    {path: '/topic',
    loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    element: <Topic></Topic>},

    {
      path: "/quiz/:quizId",
      loader: async ({ params }) => {
        return fetch(
          `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
        );
      },
      element: <StartQuiz></StartQuiz>
    },

    {path: '/static', element: <Statics></Statics>},
    {path: '/blog', element: <Blog></Blog>}

    ]},
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
