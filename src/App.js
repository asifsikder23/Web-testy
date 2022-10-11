import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Main from './components/Main/Main';
import StartQuiz from './components/StartQuiz/StartQuiz';
import Statics from './components/Statics/Statics';

import Topic from './components/Topic/Topic';

function App() {
  const router = createBrowserRouter([

    {path: '/',
    element: <Main></Main>,

    children: [
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
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
