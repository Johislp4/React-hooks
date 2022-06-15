import React from 'react';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={< HomeScreen />} />
                    <Route exact path="/about" element={< AboutScreen />} />
                    <Route exact path="/login" element={< LoginScreen />} />
                    {/* Cuando se ingrese una ruta que no existe por defecto mostraremos HomeScreen */}
                    <Route path="*" element={<HomeScreen />} />
                </Routes>
            </div>
        </Router>

    )

    // return (
    //     <Router>
    //       <NavBar />
    //       <Routes>
    //         <Route path="/" element={<HomeScreen />} />
    //         <Route path="/about" element={<AboutScreen />} />
    //         <Route path="/login" element={<LoginScreen />} />
    //         <Route path="*" element={<Navigate to="/" />} />
    //       </Routes>
    //     </Router>
    //   );
}
