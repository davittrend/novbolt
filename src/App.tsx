import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { routes } from '@/routes';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: routes,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}