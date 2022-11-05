import './App.css';
import Header from './components/Header';
import JobListComponent from './components/JobListComponent';
import {useState} from 'react'

function App() {

  const [filters, setFilters] = useState({role: "", level: "", languages: [], tools: []});

  const addFilter = (e) => {

    switch (parseInt(e.nativeEvent.target.className.slice(0, 1))) {
        case 1:
            setFilters({role: e.nativeEvent.target.innerText, level: filters.level, languages: filters.languages, tools: filters.tools})
            break;
        case 2:
            setFilters({role: filters.role, level: e.nativeEvent.target.innerText, languages: filters.languages, tools: filters.tools})

            break;
        case 3:
            !filters.languages.includes(e.nativeEvent.target.innerText) &&
             setFilters({role: filters.role, level: filters.level, languages: [...filters.languages,e.nativeEvent.target.innerText], tools: filters.tools})
             break;
        case 4:
            !filters.tools.includes(e.nativeEvent.target.innerText) &&
            setFilters({role: filters.role, level: filters.level, languages: filters.languages, tools: [...filters.tools,e.nativeEvent.target.innerText]})
            break;

        default:
            break;
    }
}

const deleteFilter = (e) => {

  let upDatedFilters = {role: "", level: "", languages: [], tools: []};


  if(filters.role !== e.currentTarget.id){ upDatedFilters.role = filters.role;}
  if(filters.level !== e.currentTarget.id){ upDatedFilters.level = filters.level;}
  
  filters.languages.map((element,i) => {
    if(filters.languages[i] !== e.currentTarget.id){ upDatedFilters.languages.push(element)}
  })
  filters.tools.map((element,i) => {
    if(filters.tools[i] !== e.currentTarget.id){ upDatedFilters.tools.push(element)}
  })

  setFilters(upDatedFilters);

}

const clearFilters = () => {
    setFilters({role: "", level: "", languages: [], tools: []});
}

  return (
    <div className="flex flex-col items-center">
        <Header filters={filters} deleteFilter={deleteFilter} clearFilters={clearFilters}></Header>
        <JobListComponent filters={filters} addFilter={addFilter}></JobListComponent>
    </div>
  );
}

export default App;
