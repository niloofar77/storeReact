import {} from '@src/pages';


export const routes = [
    {
        route: "/",
        element: <LoginPage/>,
        allowedRoute:['*']
    },

    
     

];
    

const allwaysShowRoutes = [];
const beforeAuthRoutes = ['/login'];

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
