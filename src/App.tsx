import React from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="flex flex-col justify-between md:items-center">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App