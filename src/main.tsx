import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const isAuthenticated = true;
const isHost = true; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* Public Routes */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/event/:id' element={<EventDetails />} />
      <Route path='/register' element={<Register />} />
      <Route path='/verify' element={<Verify />} />

      {/* Protected User Routes */}
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/purchases' element={<Purchases />} />
      </Route>

      {/* Protected Host Routes */}
      <Route element={<HostRoute isAuthenticated={isAuthenticated} isHost={isHost} />}>
        <Route path='/host/join' element={<HostJoin />} />
        <Route path='/host/dashboard' element={<HostDashboard />} />
        <Route path='/host/create' element={<HostCreate />} />
      </Route>

      <Route path='*' element={<Navigate to='/' replace />} />

    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
