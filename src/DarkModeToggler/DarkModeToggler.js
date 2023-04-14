import React, { useState } from 'react';

const DarkModeToggler = ({theme, toggleTheme}) => {
    const isDark = theme === 'dark';

    return (
        <div className="flex items-center justify-center">
            <button
                className={`dark-mode-toggle ${isDark ? 'bg-opacity-100' : 'bg-opacity-30'}`}
                onClick={toggleTheme}
            >
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};

export default DarkModeToggler;