 import {MdDeleteForever} from "react-icons/md"
 const Thought = ({id, text, date, handleDeleteThought}) => {
     return (
         <div className="thought">
             <span>{text}</span>
             <div className="thought-footer">
                 <small>
                    {date}
                 </small>
                 <MdDeleteForever className="delete-icon" onClick={() => handleDeleteThought(id)} size = "1.4em"/> 
                
             </div>

         </div>
     )
 }
 export default Thought;