import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home";
import { DefaultTemplate } from "./components/templates/default";
import { DesignSystem } from "./components/pages/design-system";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route index element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Route>
    </Routes>
  );
}
