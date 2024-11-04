import Navbar from "../component/Navbar"


export default function About() {
    return (
        <div style={{
            backgroundColor: "burlywood",
            minHeight: "200vh",
            padding: "5px",
            boxSizing: "border-box"
        }}>
            <Navbar />
            <h1 style={{ textAlign: "center", margin: 30, color: "black", fontSize: 40 }}><b>ABOUT US</b></h1>
            <h2 style={{ textAlign: "-webkit-match-parent", margin: 10, color: "black", fontSize: 25, }}><b> Details about the project</b></h2>

            <p style={{ textAlign: "-webkit-match-parent", margin: 10, color: "black", fontSize: 18, }}>Discover the most beautiful countries from across the globe! Our project showcases the top ten breathtaking destinations, presenting the natural beauty, highlighting their  brief introduction of the country ,stunning  rich cultures,Population ,Capilat  and the official language of every country. </p>

            <h2 style={{ fontSize: 20, textDecoration: "underline" }}><b>Features:</b></h2>
            <ol>

                <li>
                    <b style={{fontSize:18}}>Detailed Country Pages:</b><i style={ {color: "black",fontSize:17}}>Each country has a dedicated page where you can learn some breif details of the all country like its population,capital ,language.</i>
                </li>
                <li>
                    <b style={{fontSize:18}}>Top 10 List:</b> <i style={ {color: "black"}}> Browse through our list of top 10 countries, carefully curated based on natural beauty, cultural significance.</i>
                </li>
                <li>
                    <b style={{fontSize:18}}>Interactive Links: </b> <i style={ {color: "black"}}>Click on any country to learn more about its basic informations.</i>
                </li>
            </ol>
        </div>
    );
}

