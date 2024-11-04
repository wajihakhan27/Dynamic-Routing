import Link from "next/link";


export default function CountryNavbar() {
    return (
      <div>
         <nav >
            <Link
              href="http://localhost:3000/country"
              style={{
                marginRight: 20,
                padding: "10px ",
                border: "5px solid white",
                borderRadius: "5px",
                backgroundColor: "black",
                cursor: "pointer",
              }}
            > 
            <span style={{color:"white"}}>Back to Country page</span>
            </Link>
          </nav>
        
  
      </div>
    )
  }