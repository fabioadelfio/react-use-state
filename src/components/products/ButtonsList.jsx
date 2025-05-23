import React, { useState } from "react";
import languages from "../../data/languages"
import LanguageButton from "./LanguageButton";
import LanguageDescription from "./LanguageDescription";

export default function ButtonsList() {
    const [ selectedId, setSelectedId ] = useState(0);
    const selectedLanguage = languages.find(lang => lang.id === selectedId);

    return (
        <>
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

            <div>
                <LanguageDescription language={selectedLanguage}/>
            </div>
        </>
    );
}