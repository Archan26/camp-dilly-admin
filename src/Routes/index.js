import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from '../components/Loding'
import Router from './routes'




function AllRoutes() {
    function allPaths(children, isPrivateRoute) {
        return children?.map(({ path, Component, exact, props, children: child }, i) =>
            child?.length ? (
                <Route element={<Component />}>{allPaths(child, isPrivateRoute)}</Route>
            ) : !isPrivateRoute ? (
                <Route
                    key={i}
                    path={path}
                    element={
                        <Suspense fallback={<Loading />}>
                            <Component {...props} />
                        </Suspense>
                    }
                    exact={exact}
                />
            ) : null
        )
    }

    return (
        <>
            {/* <BrowserRouter> */}
            <Routes>
                {Router?.map(({ isPrivateRoute, children, Component }, i) => (
                    <Route key={isPrivateRoute ? `private${i}` : `public${i}`} element={<Component />}>
                        {allPaths(children, isPrivateRoute)}
                    </Route>
                ))}
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
            {/* </BrowserRouter> */}
        </>
    )
}

export default AllRoutes
