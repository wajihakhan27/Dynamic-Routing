import React from "react";
import Link from "next/link";
import Navbar from "../component/Navbar"

function Country() {
    
    return (

        <div
            style={{
                backgroundColor: "burlywood",
                minHeight: "100vh",
                padding: "20px",
                boxSizing: "border-box"
            }}
        >

            <Navbar />
            <h1 style={{ textAlign: "center", margin: 30, color: 'black', fontSize: 50, fontWeight: "bold", textDecoration: "underline" }}> Top Ten Beautiful Country Of The World </h1>
            <ul>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/pakistan"}>Pakistan</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/italy"}>Italy</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/turkey"}>Turkey</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/china"}>China</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/Switzerland"}> Switzerland</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/Indonesia"}>Indonesia</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/Japan"}>Japan</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/india"}>India</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/mexico"}>Mexico</Link></li>
                <li style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: "bold" }}> <Link href={"/country/iceland"}>Iceland</Link></li>
            </ul>
        </div>
    )
}
export default Country