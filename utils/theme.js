// utils/theme.js

export function setThemePreference(isDarkMode) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }
}

export function getThemePreference() {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('isDarkMode');
    return storedTheme ? JSON.parse(storedTheme) : false; // Default to light mode
  }
  
  return false; // Return a default value for non-browser environments
}
