import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map((item, index, array) => {
        const showHr = index < array.length - 1
        return(
            <>
                <Card {...item} />
                {showHr && <hr />}
            </>
        )
    })
    return (
        <div>
            <Navbar/>
            <section className="card-list">
                {cards}
            </section>
        </div>
    )
}