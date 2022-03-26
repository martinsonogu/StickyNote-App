import React from 'react';
 const Header = ({handleDarkMode}) => {
     return (
        <div className="header">
            <h1>Thoughts APP</h1>
            <button onClick={() => handleDarkMode((previousMode) => !previousMode)} className='save'>Dark Mode</button>
        </div>
     )
 }
 export default Header