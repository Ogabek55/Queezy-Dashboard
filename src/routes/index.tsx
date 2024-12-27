import Login from "../Page/Login";
import Fpassword from "../Page/FPassword";
import NewPassword from "../Page/NewPassword";
import path from "path";
import { ROUTE_PATHS } from "./paths";

export interface IRote {
    path:String,
    component: JSX.Element | JSX.Element[];
}
const {FPassword} = ROUTE_PATHS

export const PUBLIC_ROUTES: IRote[] = [
    {
        path:"/forgot-password",
        component: <FPassword />
    },
    {
        path:"/new-passowrd",
        component: <NewPassword />
    }
]
