import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { DefaultLayout } from './DefaultLayout'

import { BlogArticle } from '../pages/blog-article'
import { BlogList } from '../pages/blog-list'

export function RoutesProvider() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          path: '/',
          element: <BlogList />,
        },
        {
          path: '/post/:id',
          element: <BlogArticle />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
