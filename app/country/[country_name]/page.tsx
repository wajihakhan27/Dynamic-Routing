import React from "react";
import country_data from "./country_data";
import CountryNavbar from "@/app/component/CountryNavbar";


export default function CountryName({ params }: { params: { country_name:string } }) {
 const country = country_data[params.country_name]
    return (
        <div style={{
            backgroundColor: "black",
            minHeight: "100vh",
            padding: "20px",
            boxSizing: "border-box",
        }}
        >
            <CountryNavbar />
            <h1 style={{ textAlign: "center", margin: 30, color: 'firebrick', fontSize: 50, fontWeight: "bold" }}> {country.name}</h1>
            <p>
                <span style={{ fontWeight: "bold", color: "ghostwhite", fontSize: 20 }}>Introduction: </span>
                <span style={{ fontStyle: "italic", color: "ghostwhite" }}>{country.basic_informantion}</span>

            </p>
            <p>
                <span style={{ fontWeight: "bold", color: "ghostwhite", fontSize: 20 }}>Population: </span>
                <span style={{ fontStyle: "italic", color: "ghostwhite" }}>{country.population}</span>
            </p>
            <p>
                <span style={{ fontWeight: "bold", color: "ghostwhite", fontSize: 20 }}>Capital: </span>
                <span style={{ fontStyle: "italic", color: "ghostwhite" }}>{country.capital}</span>
            </p>
            <p>
                <span style={{ fontWeight: "bold", color: "ghostwhite", fontSize: 20 }}>Language: </span>
                <span style={{ fontStyle: "italic", color: "ghostwhite" }}>{country.Official_languages}</span>
            </p>
        </div>
    )
}


