
import { Navigate, Route, Routes} from "react-router-dom";
import PrivateLayout from "@src/layout/private";
import PublicLayout from "@src/layout/public";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { filterRoutesByAuthStep, routes } from "./config/routes";




export default function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });



  let roles = []
  const isAuth=false
  console.log(routes)
return (
    <CacheProvider value={cacheRtl}>
    
      <Routes>

        <Route element={!!isAuth ? <PrivateLayout /> : <PublicLayout />}>
          {routes.map((item) => {
            return (
              <Route
                path={item.route}
                element={item.element}
                key={item.route}
              />
            );
          })}
          <Route path="*" element={<Navigate replace to={routes[0].route} />} />
        </Route>
      </Routes>

    </CacheProvider>
  );
}
