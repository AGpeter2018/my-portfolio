import React from "react";

import NavBar from "./components/nav-bar component";
import Hero from "./components/hero/hero.component";
import AboutMe from "./components/about-component/about.component";
import Service from "./components/services-component/services.component";
import MyWork from "./components/my-work-component/my-work.component";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <Service />
      <MyWork />
    </div>
  );
}

export default App;
