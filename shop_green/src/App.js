import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';
import React  from 'react'
// components
import routes from  "./routes";

import Header from './components/header/Header'

function App() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    return (
        <div className="App" >
           
            <Router>
                <Header />
                <Switch>
                    {routes.map((route,i) => (
                        <Route path={route.href}
                         key={i} 
                         exact={route.isEsact || false}
                          component={route.component} />
                    ))}

                </Switch>
            </Router>
            </div> 
    );
}

export default App;