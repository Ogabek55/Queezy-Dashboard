import Login from "../Page/Login";
import Fpassword from "../Page/FPassword";
import NewPassword from "../Page/NewPassword";
import SignUp from "../Page/SignUP";
import SignUpWithEmail from "../Page/SignUpWithEmail";
import SignUpWithPassword from "../Page/SignUpWithPassword";
import SignUpWithUsername from "../Page/SignUpWithUsername";
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
    },
    {
        path:"/sign-up",
        component: <SignUp />
    },
    {
        path:"/sign-up-with-email",
        component: <SignUpWithEmail />
    },
    {
        path:"/sign-up-with-password",
        component: <SignUpWithPassword />
    },
    {
        path:"/sign-up-with-username",
        component: <SignUpWithUsername />
    }
]
