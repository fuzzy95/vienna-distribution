import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';
import Loader from './utils/Loader';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((item, i) => (
              <Route
                key={i}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
