import { useRoutes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import { Suspense, lazy } from "react"
import Loading from "../components/Loading"
const Loadable=(Component)=>(props)=>{
  return(
     <Suspense fallback={<Loading />}>
        <Component {...props}/>
     </Suspense>
  )
}
const Home=Loadable(lazy(()=>import('../pages/Home')))
const Router = () => {
  return useRoutes([
     {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                element:<Home />,
                index:true
            }
        ]
     }
  ])
}

export default Router;
