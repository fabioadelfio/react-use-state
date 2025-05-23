import React from "react";

export default function LanguageDescription({ language }) {
    if(!language) {
        return <div className="border border-secondary p-3">Nessun linguaggio selezionato</div>
    }

    return (
        <div className="info-language rounded-3 p-3 text-black">
            <div className="fw-bold ">{language.title}</div>
            <p className="mb-2">{language.description}</p>
        </div>
    );
}