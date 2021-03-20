import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import logging from "./config/logging";
import routes from './config/routes';

const Application: React.FunctionComponent<{}> = (props) => {
  useEffect(() => {
    logging.info(`Loading Application`);
  }, []);
  return (
      <div>
          <BrowserRouter>
            <Switch>
                {routes.map((route, idx) => {
                    return (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            render={(props: RouteComponentProps<any>) => (
                                <route.component
                                    {...props}
                                    {...route.props}
                                />
                            )}
                        />
                    )
                })}
            </Switch>
          </BrowserRouter>
      </div>
  )
}

export default Application;
