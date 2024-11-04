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
          </Link>
          <Link href="/about" style={{ marginRight: 50, color: "white", fontSize: 20 }}>
            About us
          </Link>
         <Link href="/country" style={{ marginRight: 50, color: "white", fontSize: 20 }}>
            Country </Link>
          <Link href="/contact" style={{ marginRight: 50, color: "white", fontSize: 20 }}>
            Contact us
          </Link>

        </nav>
      </header>
    </div>

  );
}

