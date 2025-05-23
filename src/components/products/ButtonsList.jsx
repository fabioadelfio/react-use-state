import React, { useState } from "react";
import languages from "../../data/languages"
import LanguageButton from "./LanguageButton";

export default function ButtonsList() {
    const [ selectedId, setSelectedId ] = useState(null);

    return (
        <div className="d-flex">
            {languages.map((language) => (
                <LanguageButton 
                    key={language.id}
                    title={language.title}
                    isSelected={selectedId === language.id}
                    onClick={() => setSelectedId(language.id)}
                />
            ))}
        </div>
    );
}