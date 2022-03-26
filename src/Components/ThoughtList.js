import React from 'react';
import Thought from "./Thought"
import AddThoughts from "./AddThoughts";
 const ThoughtList = ({thoughts, handleAddThought, handleDeleteThought}) => {
     return (
            <div className="thought-List">
                <AddThoughts 
                handleAddThought={handleAddThought}  />
                {thoughts.map((thought, index) => 
                <Thought id={thought.id}
                 text={thought.text}
                 key={index}
                date={thought.date}
                handleDeleteThought={handleDeleteThought} />)}
                
            </div>
     )
 }

 export default ThoughtList;