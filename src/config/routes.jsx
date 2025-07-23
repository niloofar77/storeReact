
import LandingPage from '@src/pages/landing';
import { CartPage,SignUpPage,LoginPage, ProductDetailsPage,NotFoundPage,CategoryPage,ProfilePage, CheckoutPage } from '../pages';


export const routes = [
    {
        route: "/",
        element: <LandingPage/>,
        allowedRoute:['*']
    },
    {
        route: "/landing",
        element: <LandingPage/>,
        allowedRoute:['*']
    },
    {
        route: "/cart",
        element: <CartPage/>,
        allowedRoute:['*']
    },
    {
        route: "/signUp",
        element: <SignUpPage/>,
        allowedRoute:['*']
    },
    {
        route: "/login",
        element: <LoginPage/>,
        allowedRoute:['*']
    },
    {
        route: "/product/:id",
        element: <ProductDetailsPage/>,
        allowedRoute:['*']
    },
    {
        route: "/category/:type",
        element: <CategoryPage/>,
        allowedRoute:['*']
    },


    {
        route: "/profile",
        element: <ProfilePage/>,
        allowedRoute:['*']
    },
    {
        route: "/checkout",
        element: <CheckoutPage/>,
        allowedRoute:['*']
    },
    

];
    

const allwaysShowRoutes = [];
const beforeAuthRoutes = ['/'];

export const filterRoutesByAuthStep = (isAuth, roles) => {
    return routes.filter((item) => {
        if (!isAuth) {
            if (
                beforeAuthRoutes.includes(item.route) ||
                allwaysShowRoutes.includes(item.route)
            ) {
                return item;
            }
        } else {
            if (
                (allwaysShowRoutes.includes(item.route) || 
                 roles.some((role) => item.allowedRoute.includes(role))) &&
                !beforeAuthRoutes.includes(item.route)
            ) {
                return item;
            }
        }
    });
};
