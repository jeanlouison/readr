import { useEffect } from "react";

const AgendaCardViewer = () => {

    let cards = [];

    useEffect(() => {
        cards = localStorage.map((agenda) => {
            <span className="card">
                <h2>{agenda.name}</h2>
                <h6>{agenda.code}</h6>
            </span>
        });
    }, []);

    return <div className="scrolling-wrapper">
        {cards}
    </div>;

};

export default AgendaCardViewer;