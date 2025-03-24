import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { TeaMenu } from "./components/TeaMenu";
import { ThemeToggle } from "./components/ThemeToggle";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatBot } from "./components/ChatBot";
import { TeaDetail } from "./components/TeaDetail";
import { Loading } from "./components/Loading";
import { Testimonials } from "./components/Testimonials";


function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");

    setTimeout(() => setLoading(false), 3500); // Matches the Loading component animation
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      {loading ? (
        <Loading onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-amber-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
          <Header />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <ChatBot />

          {/* Falling tea leaves animation */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 bg-amber-700 rounded-full opacity-40 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            >
              <div className="w-3 h-3 bg-white rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2" />
            </div>
          ))}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TeaMenu />
                  <Testimonials />
                </>
              }
            />
            <Route path="/tea/:id" element={<TeaDetail />} />
          </Routes>
          

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
