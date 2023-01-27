import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/layout/Home"
import Error from "./components/layout/Error"
import MostrarClients from "./components/clients/MostrarClients"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>
  },
  {
    path: "/clientes",
    element: <MostrarClients />,
    errorElement: <Error/>
  },
])


function App() {

  return (
    <section className="App">
    <RouterProvider router={router} />
    </section>
  )
}

export default App
