import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import routes from './routes';
import React from 'react';

function App() {
  const pathName = window.location.pathname;
  const [selected, setSelected] = React.useState(pathName);

  const renderRoutes = (item, index) => {
    return (
      <Route key={index} path={item.path} element={<item.component />} />
    )
  }


  const renderRouteLink = (item, index) => {
    return (
      <Link key={index} onClick={() => setSelected(item.path)} to={item.path}>
        <div style={{ background: selected === item.path && 'rgb(102 129 255 / 20%)' }} className='p-4' key={index}>
          {item.name}
        </div>
      </Link>
    )
  }

  return (
    <div>
      <div className='d-flex align-items-center' style={{ borderBottom: '1px solid gray' }}>
        {routes.map(renderRouteLink)}
      </div>
      <Routes>
        {routes.map(renderRoutes)}
      </Routes>
    </div>
  );
}

export default App;
