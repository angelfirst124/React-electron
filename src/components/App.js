import React, { useState, useLayoutEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Login from './Login';
import Dashboard from './dashboard/index';
import DashboardSecond from './dashboard/DashboardSecond';
import SidebarLeft from './layouts/SidebarLeft';
import SidebarRight from './layouts/SidebarRight';
import HeaderTabbar from './layouts/HeaderTabbar';
import Personal from './personal/index';
import CurrentAccount from './curaccount/index';
import MaterialStock from './materialstock/index';
import Production from './production/index';
import MessageBox from './layouts/MessageBox';

export default function App() {
    const dispatch = useDispatch();
    const [,setWindowWidth] = useState(1366);
    const [isSidebarCollapsed, setCollapsed] = useState(true);

    const isMessageboxOpened = useSelector((state) => state.common.isMessageboxOpened);

    useLayoutEffect(() => {
        function updateSize() {
            setWindowWidth(prevWidth => {
                if (prevWidth >= 768 && window.innerWidth < 768) {
                    setCollapsed(true);
                }
                return window.innerWidth;
            });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />

                <Route path="">
                    <div className="min-h-screen flex">
                        <SidebarLeft isSidebarCollapsed={isSidebarCollapsed} onToggle={setCollapsed} />
                        <div className={`flex-grow transition-all min-h-screen flex flex-col h-screen`}>
                            <HeaderTabbar />
                            <div className="flex-grow overflow-auto">
                                <Switch>
                                    <Route path="/dashboard" component={Dashboard} />
                                    <Route path="/dashboard-second" component={DashboardSecond} />
                                    <Route path="/personal" component={Personal} />
                                    <Route path="/current-account" component={CurrentAccount} />
                                    <Route path="/material-stock" component={MaterialStock} />
                                    <Route path="/production" component={Production} />
                                    <Redirect to="/login" />
                                </Switch>
                            </div>
                        </div>

                        <SidebarRight />

                        {isMessageboxOpened && <MessageBox />}
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}