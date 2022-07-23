import '../App.css';
import Login from '../containers/login';
import Layout from '../containers/layouts';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import RecoveryPassword from '../pages/passwordRecovery';
import Home from '../pages/home';
import NotFound from '../pages/notFound';
import SendEmail from '../pages/sendEmail';
import NewPassword from '../pages/newPassword'
import MyAccount from '../pages/myAccount';
import CreateAccount from '../pages/createAccount';
import Checkout from '../pages/checkout';
import Orders from '../pages/orders';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

function App() {
  const InitialState = useInitialState()
  return (
    < AppContext.Provider value={InitialState}>

    < BrowserRouter>
        <Layout>
        <Routes>
        < Route exact  path='/' element={ <Home />} />
        < Route exact  path='/login' element={<Login />} />
        < Route exact  path='/recovery-password' element={<RecoveryPassword />} />
        < Route exact  path='/send-email' element={<SendEmail />} />
        < Route exact  path='/new-password' element={<NewPassword />} />
        < Route exact  path='/my-account' element={<MyAccount />} />
        < Route exact  path='/create-account' element={<CreateAccount />} />
        < Route exact  path='/checkout' element={<Checkout />} />
        < Route exact  path='/orders' element={<Orders />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
     </ BrowserRouter>
     </ AppContext.Provider>
  );
}

export default App;
