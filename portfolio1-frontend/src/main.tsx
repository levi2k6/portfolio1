import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './routes/Login.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Login/> },
      { path: "/dashboard", element: <Dashboard /> }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
