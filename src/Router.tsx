import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

export function Router() {
  return (
    <Routes>
      {/* Every route that uses the DefaultLayout will have the same layout. */}
      <Route path="/" element={<DefaultLayout />}>
        {/* Add routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
