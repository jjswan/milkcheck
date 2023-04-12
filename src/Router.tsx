import { createBrowserRouter } from "react-router-dom";
import Check from "./routes/Check";
import Change from "./routes/Change";


const Router=createBrowserRouter([
  {
    path:"/",
    element:<Check/>,
    children:[
      {
        path:"/change",
        element:<Change/>
      }
    ]
  }
])

export default Router;