import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Creators } from "./components/Creators";
import { Support } from "./components/Support";
import { Footer } from "./components/Footer";
import { InProgressDialog } from "./components/InProgressDialog";

export default function App() {
  const [showInProgress, setShowInProgress] = useState(false);

  const handleAppClick = () => {
    setShowInProgress(true);
  };

  const handleRegisterClick = () => {
    // Aquí puedes cambiar esta URL por tu formulario de Google Forms
    window.open(
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onAppClick={handleAppClick} onRegisterClick={handleRegisterClick} />
      <Hero onRegisterClick={handleRegisterClick} />
      <Features />
      <Creators />
      <Support />
      <Footer />
      <InProgressDialog
        open={showInProgress}
        onOpenChange={setShowInProgress}
      />
    </div>
  );
}
