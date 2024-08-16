import "./App.css";
import React, { useEffect } from "react";
function App() {
  return (
    <div className="App">
      <main className="flex flex-col">
        {/* <header class="site-header">
          <div class="site-header-mask"></div>
        </header> */}
        <section>
          <img id="mountain_back" src="/images/mountain_back.svg" alt="img" />
          <section className="title">
            <h1 className="site-title">LOSANGELES</h1>
            <h1 className="site-title2">MOUNTAINS</h1>
          </section>
          <img id="mountain_front" src="/images/mountain_front.svg" alt="img" />
        </section>
      </main>
    </div>
  );
}

export default App;
