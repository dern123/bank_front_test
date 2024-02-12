import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../pages/Page404/Page404";
import Registration from "../pages/Registration/Registration"
import Transaction from "../pages/Transaction/Transaction";
import SignIn from "../pages/SignIn/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Account from "../pages/Account/Account";
import Edit from "../pages/Edit/Edit";
import Gamefiacation from "../pages/Gamefication/Gamefication";
import Statistic from "../pages/Statistic/Statistic";
 
const AppRoutes = () => {
    return( 
        <Routes>
            <Route path="/" element={<Navigate to="/registration" />} />
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/transaction' element={<Transaction/>}/>
            <Route path="/statistic" element={<Statistic/>}/>
            <Route path='/gamefication' element={<Gamefiacation/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    );
}

export default AppRoutes;