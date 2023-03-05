
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/css/animations.css';
import './assets/css/buttons.css';
import './assets/css/dutstrap.css';
import './assets/css/error.css';
import './assets/css/style.css';
import './assets/css/types.css';


import CustomRoute from './components/Routes/CustomRoute';
import StoreProvider from './store/StoreProvider';

import ArticlePage from './pages/Articles';
import Betav2Page from './pages/Client/Beta';
import FlashPage from './pages/Client/Flash';
import HabboWay from './pages/HabboWay';
import Hall from './pages/Hall';
import HomePage from './pages/Home';
import IndexPage from './pages/Index';
import ProfilePage from './pages/Profile';
import RecoveryPassword from './pages/RecoveryPassword';
import RegisterPage from './pages/Register';
import SettingsPage from './pages/Settings';
import StaffPage from './pages/Staff';
import VipPage from './pages/Vip';

import NotFoundPage from './pages/NotFound';

const App = (props) => {
    const config = JSON.parse(props.config);

    return (
        <BrowserRouter>
            <StoreProvider config={config}>
                <Switch>
                    <CustomRoute exact privateRoute path="/me" component={HomePage} />
                    <CustomRoute exact privateRoute path="/home" component={HomePage} />
                    <CustomRoute exact privateRoute path="/community/hall/coins" component={Hall} coins />
                    <CustomRoute exact privateRoute path="/community/hall/achievements" component={Hall} achievements />
                    <CustomRoute exact privateRoute path="/community/staff" staff component={StaffPage} />
                    <CustomRoute exact privateRoute path="/community/staff/gea" gea component={StaffPage} />
                    <CustomRoute exact privateRoute path="/community/staff/colab" colab component={StaffPage} />

                    <CustomRoute exact privateRoute path="/profile/:username" component={ProfilePage} />
                    <CustomRoute exact privateRoute path="/shop/vip" vip component={VipPage} />
                    <CustomRoute exact privateRoute path="/shop/stars" stars component={VipPage} />
                    <CustomRoute exact privateRoute path="/shop/diamonds" diamonds component={VipPage} />
                    <CustomRoute exact privateRoute path="/shop/duckets" duckets component={VipPage} />
                    <CustomRoute exact privateRoute path="/settings/account" account component={SettingsPage} />
                    <CustomRoute exact privateRoute path="/settings/email" email component={SettingsPage} />
                    <CustomRoute exact privateRoute path="/settings/password" password component={SettingsPage} />

                    <CustomRoute exact privateRoute path="/logout" logoutRoute />

                    <CustomRoute exact onlyUnauthorized path="/" component={IndexPage} />
                    <CustomRoute exact onlyUnauthorized path="/index" component={IndexPage} />
                    <CustomRoute exact onlyUnauthorized path="/register" component={RegisterPage} />

                    <CustomRoute exact publicRoute path="/new-password/:resetkey" component={RecoveryPassword} />
                    <CustomRoute exact publicRoute path="/news/" component={ArticlePage} />
                    <CustomRoute exact publicRoute path="/news/:id" component={ArticlePage} />
                    <CustomRoute exact publicRoute path="/client/betav2" component={Betav2Page} />
                    <CustomRoute exact publicRoute path="/client" component={FlashPage} />
                    <CustomRoute exact publicRoute path="/client/60" component={FlashPage} />
                    <CustomRoute exact publicRoute path="/habbo-way" component={HabboWay} />


                    <Route component={NotFoundPage} publicRoute/>
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    );
}

export default App;