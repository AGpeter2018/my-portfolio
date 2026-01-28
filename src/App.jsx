import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/nav-bar component";
import Hero from "./components/hero/hero.component";
import AboutMe from "./components/about-component/about.component";
import Service from "./components/services-component/services.component";
import MyWork from "./components/my-work-component/my-work.component";
import Content from "./components/content-component/content.component";
import Footer from "./components/footer-component/footer.component";
import Cursor from "./components/cursor-component/cursor.component";
import Preloader from "./components/preloader-component/preloader";
import ScrollIndicator from "./components/scroll-indicator-component/scroll-indicator";
import ResumeModal from "./components/resume-modal-component/resume-modal";

import ScrollToTop from "./components/scroll-top-component/scroll-top";

import FeaturedCaseStudy from "./components/case-study-component/case-study";
import GitHubStats from "./components/github-stats-component/github-stats";
import Testimonials from "./components/testimonials-component/testimonials";
import ToolsShowcase from "./components/tools-component/tools";
import FAQ from "./components/faq-component/faq";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ScrollIndicator />
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollToTop />
      <Cursor />
      <NavBar openResume={() => setIsModalOpen(true)} />
      <Hero openResume={() => setIsModalOpen(true)} />
      <FeaturedCaseStudy />
      <AboutMe />
      <ToolsShowcase />
      <Service />
      <GitHubStats />
      <MyWork />
      <Testimonials />
      <FAQ />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
