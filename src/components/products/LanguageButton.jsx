import React from "react";

export default function LanguageButton({ title, isSelected, onClick }) {
    return (
        <button className={`btn m-2 fs-4 ${isSelected ? "btn-warning" : "btn-primary"}`}
                onClick={onClick}>
            {title}
        </button>
    );
}