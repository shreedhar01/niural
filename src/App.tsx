import React from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div >
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App