import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "../components/MainLayout";
import Home from "../pages/home";
import Hq from "../pages/hq";
import Planning from "../pages/hq/planning";
import Strategy from "../pages/hq/planning/strategy";
import Newbiz from "../pages/hq/planning/strategy/newbiz";
import MarketResearch from "../pages/hq/planning/strategy/newbiz/market-research";
import Product from "../pages/product";
import Sales from "../pages/product/sales";
import Hr from "../pages/product/hr";
import Dev from "../pages/hq/dev";

const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="hq" element={<Hq />} />
          <Route path="hq/planning" element={<Planning />} />
          <Route path="hq/planning/strategy" element={<Strategy />} />
          <Route path="hq/planning/strategy/newbiz" element={<Newbiz />} />
          <Route path="hq/planning/strategy/newbiz/market-research" element={<MarketResearch />} />
          <Route path="hq/dev" element={<Dev />} />

          <Route path="product" element={<Product />} />
          <Route path="product/sales" element={<Sales />} />
          <Route path="product/hr" element={<Hr />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
