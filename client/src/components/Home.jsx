import React from "react";
import DarkVeil from "./darkVeil/DarkVeil";

const Home = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil />
            </div>
            <main style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px' }}>
                
            </main>
        </div>
    );
};

export default Home;