"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import "./navbar.css";


export default function NavBar({ page, setPage }) {
   
  const cursorSvg = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTAiIGZpbGw9ImdyYXkiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+") 16 16, auto`;

    return (
        <div className="navbar-container font-terminal" style={{ cursor: cursorSvg }}>
            <div className={page==0?"nav-item glitch active":"nav-item glitch"} style={{ cursor: cursorSvg }} onClick={() => setPage(0)}>
                Home
            </div>
     
            <div className={page==1?"nav-item glitch active":"nav-item glitch"} style={{ cursor: cursorSvg }} onClick={() => setPage(1)}>
                About
            </div>
            <div className={page==2?"nav-item glitch active":"nav-item glitch"} style={{ cursor: cursorSvg }} onClick={() => setPage(2)}>
                Gallery
            </div>
            <div className={page==3?"nav-item glitch active":"nav-item glitch"} style={{ cursor: cursorSvg }} onClick={() => setPage(3)}>
                Contact
            </div>
         
            <div className={page==4?"nav-item glitch active":"nav-item glitch"} style={{ cursor: cursorSvg }} onClick={() => setPage(4)}>
                Tech
            </div>
        </div>
    );
}
