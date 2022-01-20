/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import routes from './routes';
import TodoList from 'MiniProjects/TodoList';

function App() {
  const renderRoutes = (item, index) => {
    return (
      <Route key={index} path={item.path} element={<item.component />} />
    )
  }

  return (
    <div>
      <div>
        <ul>
          <li>
            <Link style={{ padding: 0, margin: 0 }} to={'/'}>
              <p className="active m-0 p-3">
                Home
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className='m-3'>
        <Routes>
          {/* {routes.map(renderRoutes)} */}
          <Route path={'/'} element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
