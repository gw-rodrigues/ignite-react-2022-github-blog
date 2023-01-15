import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BlogArticle } from '../pages/blog-article'
import { BlogList } from '../pages/blog-list'
import { DefaultLayout } from './DefaultLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
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

export function RoutesProvider() {
  return <RouterProvider router={router} />
}
