import React from 'react';

interface Language {
    code: string;
    name: string;
}

interface LanguageSelectorProps {
    languages: Language[];
    selectedLanguage: string;
    onLanguageChange: (language: string) => void;
    label: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    languages,
    selectedLanguage,
    onLanguageChange,
    label
}) => {
    return (
        <div className="language-selector">
            <label htmlFor={label} className="language-label">
                {label}
            </label>
            <select
                id={label}
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="language-select"
            >
                <option value="">Select Language</option>
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;