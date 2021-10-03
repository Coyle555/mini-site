import React from 'react'
import Register from './components/Register'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Agenda from './components/Agenda';

const PageRouter = () => {
    return (
        <>
            <Switch >
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/agenda' component={Agenda} />
            </Switch>
        </>
        
    )
}

export default PageRouter
