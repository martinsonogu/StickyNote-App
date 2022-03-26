import {useEffect, useState} from "react"
import {nanoid} from "nanoid"
import ThoughtList from "./Components/ThoughtList";
import Search from "./Components/Search";
import Header from "./Header";

const App = () => {
  const [thoughts, setThoughts] = useState([{
    id: nanoid(),
    text:"This us my first note",
    date: "03/04/2022" 
  },
  {
    id: nanoid(),
    text:"This us my second note",
    date: "03/04/2022" 
  },
  {
    id: nanoid(),
    text:"This us my third note",
    date: "03/04/2022" 
  },
  {
    id: nanoid(),
    text:"This us my fourth note",
    date: "03/04/2022" 
  },
  {
    id: nanoid(),
    text:"This us my fifth note",
    date: "03/04/2022" 
  }
])

const [searchText, setSearchText] = useState("");

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedThoughts= JSON.parse(localStorage.getItem('react-thought-app-data'));
  if (savedThoughts) {
    setThoughts(savedThoughts);
  }
}, [])

useEffect(() => {
  localStorage.setItem('react-thought-app-data', JSON.stringify(thoughts));
}, [thoughts]);

const addThought = (text) =>  {
    const date = new Date();
    const newThought = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }
    const newThoughts = [...thoughts, newThought]
    setThoughts(newThoughts)
}
const deleteThought = (id) => {
      const newThoughts = thoughts.filter((note) => (note.id !== id));
      setThoughts(newThoughts)
}
  return (
    <div className={`${darkMode && 'dark-mode'} `}>
      <div className="container">
      <Header handleDarkMode = {setDarkMode}/>
      <Search handleSearchThought={setSearchText} />
     
      <ThoughtList 
      thoughts={thoughts.filter((thought) => thought.text.toLocaleLowerCase().includes(searchText))} 
      handleAddThought={addThought} 
      handleDeleteThought = {deleteThought}/>
    </div>
  

    </div>
   ); 
}

export default App;
