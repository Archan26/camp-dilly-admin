import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Login from './pages/LoginPage';
import DashboardAppPage from './pages/DashboardAppPage';
import UserPage from './pages/UserPage';
import PrivateRoute from './Routes/privateRoute';
import ViewUserPage from './pages/ViewUserPage';
import Page404 from './pages/Page404';

// ----------------------------------------------------------------------
const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ScrollToTop />
            <StyledChart />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/notfound" element={<Page404 />} />
              <Route exact path='/' element={<PrivateRoute />}>
                <Route exact path='/' element={<DashboardLayout />}>
                  <Route exact path='/' element={<DashboardAppPage />} />
                  <Route exact path='/dashboard/user' element={<UserPage />} />
                  <Route exact path='/dashboard/user/view/:id' element={<ViewUserPage />} />
                </Route>
              </Route>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<Navigate to="/notfound" replace />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider >
  )
}
