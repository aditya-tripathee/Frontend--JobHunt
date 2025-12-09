import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/components Lite/Home"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"


const appRouter = createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/login",element:<Login/>},
  {path:"/register",element:<Register/>}
])

function App() {
  return (
    <div>
    <RouterProvider router={appRouter}>
    </RouterProvider>
    </div>
  )
}

export default App
