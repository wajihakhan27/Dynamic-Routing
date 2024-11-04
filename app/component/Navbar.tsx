import Link from "next/link";

export default function Navbar() {
  return (

    <div>
      <header style={{
        textAlign: "center",
        background: "gray",
        border: "5px solid black",
      }}>
        <nav>
          <Link href="/" style={{ marginRight: 50, color: "white", fontSize: 20 }}>
            Home page
          </Link>&nbsp;|&nbsp;&nbsp;
          <Link href="/about" style={{ marginRight: 50, color: "white", fontSize: 20 }}>
            About us
          </Link>&nbsp;|&nbsp;&nbsp;
         <Link href="/country" style={{ marginRight: 50, color: "white", fontSize: 20 }}>
            Country </Link>&nbsp;|&nbsp;&nbsp;
          <Link href="/contact" style={{ marginRight: 50, color: "white", fontSize: 20 }}>
            Contact us
          </Link>&nbsp;

        </nav>
      </header>
    </div>

  );
}

