import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Payment from '../components/Payment/Payment';
import Contact from '../components/Contact';
import Order from "../components/Order";
import Address from "../components/Address";

function AppRoutes() {
  return (
    <Routes>
      {/* User side routes */}
      <Route element={<Layout />} >
        <Route path="/" element={<Order />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>

  );
}

export default AppRoutes;