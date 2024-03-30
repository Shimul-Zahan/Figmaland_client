import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home';
import Client from '../Layout/Client';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <h1>Error page here</h1>,
        element: <Client />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router;