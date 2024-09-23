import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "@/components/layout/header";
import Home from "@/pages/home/home";
import Portfolio from "@/pages/portfolio/portfolio";
import "animate.css";
import "@/assets/styles/anime.css";
import Footer from "@/components/layout/footer";
import Network from "@/pages/network/network";
import Team from "@/pages/team/team";
import Voice from "@/pages/voice/voice";
import Detail from "@/pages/detail/detail";
import UserAgreement from "@/components/useragreement/UserAgreement";


const AppContent = () => (
  <>
    <Header />
    <div className="pt-[7.5rem]">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/network" element={<Network />} />
        <Route path="/team" element={<Team />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
    <Footer />
  </>
);

const App = () => {
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    const agreementStatus = localStorage.getItem('userAgreement');
    if (agreementStatus === 'accepted') {
      setHasAgreed(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userAgreement', 'accepted');
    setHasAgreed(true);
  };

  return (
    <BrowserRouter>
      {hasAgreed ? (
        <AppContent />
      ) : (
        <UserAgreement onAccept={handleAccept} />
      )}
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

