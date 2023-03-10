import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import "./index.scss";
import ErrorBoundary from "./ErrorBoundary";

// Asynchronous loading component
// const Header = React.lazy(() => import("home/Header"));

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    {/* Asynchronous loading component */}
    {/* <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense> */}
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <div className="text-center">
      <h3 className="leading-tight py-10">About Page</h3>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
