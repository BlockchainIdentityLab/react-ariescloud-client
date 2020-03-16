import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pages from './pages/index';
import Profile from "./Components/Profile";


const App = () => {

    return (
        <div className="section">
            <h1 className="title is-centered">React Aries Cloud Controller</h1>
            <Profile/>

            <BrowserRouter>
                <div>
                    <Switch>
                        {Object.values(pages).map(({ RootComponent, rootPath }) =>{
                            console.log(rootPath);
                            return (
                                <Route
                                    key={rootPath}
                                    path={rootPath}
                                    exact={rootPath === '/'}
                                    render={props => <RootComponent {...props} />}
                                />
                            )
                        } )}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;
