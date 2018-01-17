import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Header from 'components/Header/Header';
import Left from 'components/Left/Left';
import Right from 'components/Right/Right';

import appRoutes from 'routes/app.jsx';

class App extends Component {
    render() {
        return (
		<div>
		<Header {...this.props}/>
            <main className="main-sec">
				<Left />
				<Switch>
					{
						appRoutes.map((prop,key) => {
							if(prop.name === "Notifications")
								return (
									<Route
										path={prop.path}
										key={key}
										render={routeProps =>
										   <prop.component
											   {...routeProps}
											   handleClick={this.handleNotificationClick}
										   />}
									/>
								);
							if(prop.redirect)
								return (
									<Redirect from={prop.path} to={prop.to} key={key}/>
								);
							return (
								<Route path={prop.path} component={prop.component} key={key}/>
							);
						})
					}
				</Switch>
				<Right />
			</main>	
		</div>	
        );
    }
}

export default App;
