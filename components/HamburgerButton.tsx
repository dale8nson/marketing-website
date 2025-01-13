"use client"
import { MouseEventHandler } from "react";

const HamburgerButton = ({onClick, className}:{onClick:MouseEventHandler, className?:string}) => {
  
  return (
    <button onClick={onClick} className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
    </button>
  );
}

export { HamburgerButton }