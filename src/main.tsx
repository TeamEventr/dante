import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { HostRoute, PrivateRoute } from './utils/PrivateRoutes.tsx'

import Home from './pages/home.tsx'
import Explore from './pages/explore.tsx'
import About from './pages/about.tsx'
import Support from './pages/support.tsx'
import Event from './pages/event.tsx'
import Register from './pages/register.tsx'
import Verify from './pages/verify.tsx'

import UserProfile from './pages/user.profile.tsx'
import UserBookmarks from './pages/user.bookmarks.tsx'
import UserTickets from './pages/user.tickets.tsx'
import UserPurchases from './pages/user.purchases.tsx'

import HostJoin from './pages/host.join.tsx'
import HostDashboard from './pages/host.dashboard.tsx'
import HostCreate from './pages/host.create.tsx'
import NotFound from './pages/404.tsx'

const isAuthenticated = true;
const isHost = true; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      {/* Public Routes */}
      <Route index element={<Home />} />
      <Route path='explore' element={<Explore />} />
      <Route path='about' element={<About />} />
      <Route path='support' element={<Support />} />
      <Route path='event/:id' element={<Event />} />
      <Route path='register' element={<Register />} />
      <Route path='verify' element={<Verify />} />
      <Route path='host/join' element={<HostJoin />} />

      {/* Protected User Routes */}
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path='profile' element={<UserProfile />} />
        <Route path='bookmarks' element={<UserBookmarks />} />
        <Route path='tickets' element={<UserTickets />} />
        <Route path='purchases' element={<UserPurchases />} />
      </Route>

      {/* Protected Host Routes */}
      <Route element={<HostRoute isAuthenticated={isAuthenticated} isHost={isHost} />}>
        <Route path='host/dashboard' element={<HostDashboard />} />
        <Route path='host/create' element={<HostCreate />} />

        {/* Catch-all route */}
        <Route path='host/*' element={<Navigate to='/host/dashboard' replace />} />
      </Route>

      {/* Catch-all route */}
      <Route path='*' element={<NotFound />} />

    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
