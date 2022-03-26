import {useState} from 'react'
const AddThoughts = ({handleAddThought}) => {
    const[noteText, setNoteText] = useState('');
    const charLimit = 200;

    const handleChange = (event) => {
        if(charLimit - event.target.value.length >= 0){
        setNoteText(event.target.value);
    }
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
        handleAddThought(noteText);
        setNoteText('')
     }
        
    };

    return (
        <div className="Addthought new">
            <textarea rows="14" cols="32"  placeholder="Type to add your thought"
            onChange={handleChange}
            value={noteText}
            ></textarea>
            <div className="thought-footer">
                <small>{charLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddThoughts