import React from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <div>
      	<header>
		  <h1>SwapCloud</h1>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">AboutUs</a>
				<a href="/#">Transaction</a>
				<a href="/#">Options&Terms</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    </div>
  )
}

export default Navbar
