
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import SimpleLayout from '../layouts/simple';


// import BlogPage from './pages/BlogPage';
import UserPage from '../pages/UserPage';
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';
// import ProductsPage from '../pages/ProductsPage';
import DashboardAppPage from '../pages/DashboardAppPage';
import ViewUserPage from '../pages/ViewUserPage';



export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage />, },
        { path: 'user/view/:id', element: <ViewUserPage /> },

        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}


//-------------------------------------------------------------

// import { lazy } from 'react'
// import { route } from './route';

// const PublicRoute = lazy(() => import('./publicRoutes'))
// const PrivateRoute = lazy(() => import('./privateRoute'))

// // public
// const Login = lazy(() => import('../pages/LoginPage'))

// // private

// // layouts
// const DashboardLayout = lazy(() => import('../layouts/dashboard'))
// const SimpleLayout = lazy(() => import('../layouts/simple'))
// const DashboardAppPage = lazy(() => import('../pages/DashboardAppPage'))
// const User = lazy(() => import('../pages/UserPage'))
// const userDetails = (() => import('../pages/ViewUserPage'))



// const Router = [
//   {
//     defaultRoute: '',
//     Component: PublicRoute,
//     props: {},
//     isPrivateRoute: false,
//     children: [
//       { path: '/login', Component: Login, exact: true }
//     ]
//   },
//   {
//     defaultRoute: '',
//     Component: PrivateRoute,
//     props: {},
//     isPrivateRoute: true,
//     children: [
//       { path: route.dashbaordapp, Component: DashboardLayout, exact: true },
//       { path: route.dashbaordapp, Component: DashboardAppPage, exact: true },
//       { path: route.user, Component: User, exact: true },
//       { path: route.userDetails(':id'), Component: userDetails, exact: true },
//       { path: route.dashboard, Component: SimpleLayout, exact: true }
//     ]
//   }
// ]

// export default Router


//----------------------------------------------------------------------


// import { Routes, Route, Navigate } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import DashboardLayout from '../layouts/dashboard/DashboardLayout';
// import DashboardAppPage from '../pages/DashboardAppPage';
// import UserPage from '../pages/UserPage';
// import ViewUserPage from '../pages/ViewUserPage';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token');
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
//   return <Element {...rest} />;
// };

// const DashboardRouter = () => (
//   <Routes>
//     <DashboardLayout>
//       <PrivateRoute path="/" element={<DashboardAppPage />} />
//       <PrivateRoute path="/user" element={<UserPage />} />
//       <PrivateRoute path="/user/view/:id" element={<ViewUserPage />} />
//     </DashboardLayout>
//   </Routes>
// );

// export default function Router() {
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route
//         path="/dashboard/*"
//         element={
//           <DashboardRouter />
//         }
//       />
//       <Route path="*" element={<Navigate to="/login" replace />} />
//     </Routes>
//   );
// }

//--------------------------------------------------------

// import { Routes, Route, Navigate } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import DashboardLayout from '../layouts/dashboard/DashboardLayout';
// import DashboardAppPage from '../pages/DashboardAppPage';
// import UserPage from '../pages/UserPage';
// import ViewUserPage from '../pages/ViewUserPage';

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token');
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
//   return <Element {...rest} />;
// };

// const DashboardRouter = () => (
//   <Routes>
//     <PrivateRoute path="/" element={<DashboardAppPage />} />
//     <PrivateRoute path="/user" element={<UserPage />} />
//     <PrivateRoute path="/user/view/:id" element={<ViewUserPage />} />
//     <Route path="*" element={<Navigate to="/login" replace />} />
//   </Routes>
// );

// export default function Router() {
//   const token = localStorage.getItem('token');

//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       {token ? (
//         <Route path="/dashboard/*" element={<DashboardRouter />} />
//       ) : (
//         <Navigate to="/login" replace />
//       )}
//       <Route path="*" element={<Navigate to="/login" replace />} />
//     </Routes>
//   );
// }
