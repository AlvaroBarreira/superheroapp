import { Switch, Route } from "react-router-dom";
import Home from '../Components/pages/Home'
import Login from '../Components/pages/Login';
import PageNotFound from '../Components/pages/PageNotFound';
import PrivateRoute from './PrivateRoute'

function Routes() {
    return (
        <Switch>
            <PrivateRoute exact path="/Home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route exact component={PageNotFound} />
        </Switch>
    );
}

export default Routes;


