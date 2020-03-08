import { useState, useEffect } from 'react';

export default function usePersistedTheme( key, initialState ) {

    const [ theme, setTheme ] = useState(() => {
        const previewTheme = localStorage.getItem(key);

        if (!previewTheme) return [initialState, 1];

        else {
            const Theme = previewTheme.split(",");
            return Theme;
        }
    });

    useEffect(() => { 
        localStorage.setItem(key, theme)    
    }, [ theme, key ]);

    return [ theme[0], setTheme ];
}
