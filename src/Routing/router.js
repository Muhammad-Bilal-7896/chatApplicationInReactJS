import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Login from '../Pages/Login';

function AppRouter() {
    return (
        <Router>
           
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
        </Router>

    )
}
export default AppRouter;