import Navbar from "./component/Navbar"


export default function Homepage() {
  return (
    <div style={{
      backgroundColor: "burlywood",
      minHeight: "200vh",
      padding: "5px",
      boxSizing: "border-box"
}}>

      <h1 style={{ textAlign: "center", fontSize: 40, fontWeight: "bold", margin: 10, color: "black"}}>Home Page</h1>

      <Navbar />

      <p style={{ textAlign: "-webkit-match-parent", margin: 40, color: "black", fontSize: 18 }}>Welcome to our project! The aim to create a user-friendly platform showcasing the world's top beautiful countries using the latest web technologies. </p>

            <h2 style={{fontSize: 18, textDecoration:"underline"}}><b>Key Features of Our Project:</b></h2>
            <ol>

                <li>
                    <b>Dynamic Routing:</b><i style={ {color: "black"}}>We've implemented dynamic routing to provide a seamless experience while navigating through different country pages. This allows users to click on any country and be directed to a dedicated page with more information.</i>
                </li>
                <li>
                    <b>Responsive Design:</b> <i style={ {color: "black"}}>Our website is designed to be responsive, ensuring that it looks great on all devices, from desktops to mobile phones.</i>
                </li>
                <li>
                    <b>Modern Styling: </b> <i style={ {color: "black"}}>Our user interface is designed with modern aesthetics, using inline styles and CSS to create a clean and professional look.</i>
                </li>
            </ol>

    </div>
  );
}