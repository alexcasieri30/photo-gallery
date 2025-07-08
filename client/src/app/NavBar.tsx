

import Image from "next/image";
import { useEffect, useState } from "react";
import "./navbar.css";

export default function NavBar({ setPage }) {
   
  const cursorSvg = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTAiIGZpbGw9ImdyYXkiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+") 16 16, auto`;

    return (
        <div className="navbar-container font-terminal" style={{ cursor: cursorSvg }}>
            <div className="nav-item glitch" onClick={() => setPage(0)}>
                Home
            </div>
            <div className="nav-item glitch" onClick={() => setPage(1)}>
                About
            </div>
            <div className="nav-item glitch" onClick={() => setPage(2)}>
                Gallery
            </div>
            <div className="nav-item glitch" onClick={() => setPage(3)}>
                Contact
            </div>
            <div className="nav-item glitch" onClick={() => setPage(4)}>
                Tech
            </div>
        </div>
    );
}
