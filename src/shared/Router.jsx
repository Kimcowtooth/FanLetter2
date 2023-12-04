import Detail from "pages/Detail";
import Home from "pages/Home";
import Layout from "components/Layout";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  // const { isLogin } = useSelector((state) => state.auth.isLogin);
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route element={isLogin ? <Layout /> : <Navigate to='/login' />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
