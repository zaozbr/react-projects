import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  useState(people.length - 1)

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className='danger' onClick={() => setPeople([])}>
          Clear All
        </button>
        <button className='goAction' onClick={() => setPeople(data)}>
          Update page
        </button>
      </section>
    </main>
  )
}

export default App
