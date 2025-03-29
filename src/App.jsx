import { useState } from "react";
import { GlobalProvider } from "./Context/GlobalContext";
import Header from "./layout/header";
import Form from "./layout/form";
import GroceryList from "./layout/grocerylist";
import Footer from "./layout/footer";
import Stats from "./layout/stats";
import "./index.css";

function App() {
  return (
    <GlobalProvider>
      <div className="mockup-browser bg-base-200 min-h-screen flex flex-col">
        <Header />
        <div className="hero text-center w-full flex-grow flex items-start justify-center pt-10">
          <div className="card bg-base-100 shadow-sm w-full p-5 m-5 max-w-lg">
            <Form />
            <div className="divider"></div>
            <GroceryList />
            <div className="divider"></div>
            <Stats />
          </div>
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
