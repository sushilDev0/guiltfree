
import './App.css'
import { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState("")
  const [showActive, setShowActive] = useState(false);

const users = [
  { id: 1, name: "Arnold", active: true, age: 35 },
  { id: 2, name: "Bautista", active: false, age: 42 },
  { id: 3, name: "Christopher", active: true, age: 29 },
  { id: 4, name: "Andrew", active: true, age: 50 }
];
const renderByAge =  users.sort((a,b)=> a.age -b.age);

 const filteredUsers =  users.filter( user => {
  const matchSearch = user.name.toLowerCase().includes(search.toLowerCase())

  const matchActive = showActive ? user.active : "true";
  return matchSearch && matchActive && renderByAge
})
  return (
    <>

      <div className='container'>

        <div className='center'>

          <input type="search"
           value={search} 
           placeholder='Search by name...'
            className='search' 
            onChange={(e) => setSearch(e.target.value)} />

          <div className='p1'>

            <input type="checkbox"
             checked={showActive}
              onChange={() => setShowActive(prev => !prev)}
            />
            <label htmlFor="checkbox">active only</label>
          </div>
          
         {filteredUsers.length === 0 ?(
          <p>No users found</p>
         ):(
          <ol>
            {filteredUsers.map(user=>(
              
              <li key={user.id}>
                {user.name}  - {user.age} {user.active ? "Active" : "Inactive"}
              </li>
            ))}
          </ol>
)}
        </div>
      </div>



    </>
  )
}

export default App
