import Navbar from "../component/Navbar"

export default function Contact() {
    return (
        <div style={{
            backgroundColor: "burlywood",
            minHeight: "200vh",
            padding: "5px",
            boxSizing: "border-box"
    }}>
            <Navbar />

            <h1 style={{ textAlign: "center", margin: 30, color: "black", fontSize: 40 }}><b>Contact us</b></h1>
          <ul>
          
          <li><a style={{margin: 30, color: "black", fontSize: 20}} href="https://www.linkedin.com/in/wajiha-khan-2064381b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">Linkdin</a></li> 
           <li><a style={{margin: 30, color: "black", fontSize: 20}} href=" https://github.com/wajihakhan27">GitHub</a></li>
           </ul>
        </div>
    );
}