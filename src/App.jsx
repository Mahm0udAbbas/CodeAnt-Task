import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Repositories from "./pages/Repositories";
import AppLayout from "./ui/AppLayout";
import CodeReview from "./pages/CodeReview";
import Setting from "./pages/Setting";
import CloudSecurity from "./pages/CloudSecurity";
import HowToUse from "./pages/HowToUse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<AppLayout />}>
            <Route path="repositories" index element={<Repositories />} />
            <Route path="codeReview" element={<CodeReview />} />
            <Route path="cloudSecurity" element={<CloudSecurity />} />
            <Route path="howToUse" element={<HowToUse />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
