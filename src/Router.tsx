import { createBrowserRouter } from "react-router-dom";
import Milklist from "./routes/Milklist";
import Change from "./routes/Change";


const Router=createBrowserRouter([
  {
    path:"/",
    element:<Milklist/>,
    children:[
      {
        path:"/change",
        element:<Change/>
      }
    ]
  }
])

export default Router;