import React, {useState} from 'react'
import './Dictionary.css'
import { CiSearch } from "react-icons/ci"

function Dictionary() {

    // create state to hold user input
    const [search, setSearch] = React.useState('')
    const [definition, setDefinition] = React.useState('')

    const handleInput = (e) =>{
        // console.log('Searching', e.target.value)
        // e.target.value has user input in textbox
        // store user input in state
        setSearch(e.target.value)
    }

    const searchWord = () => {
        console.log('search')
        // when Icon is clicked, generate output definiton
        setDefinition(`Hello ${search}`)
        // clear textbox
        setSearch('')
    }


  return (
    <div className='dictionary-container'>
        <h3>Xori's Dictionary</h3>
        <div className='search'>
        <input type='type' value={search} placeholder='Search word' onChange={(e)=>setSearch(e.target.value)} />
        <div>
        {/* <p className='hover-message'>hover effect</p> */}
        </div>
        <CiSearch  className='search-icon' onClick={searchWord} />
        <p>{definition}</p>
        <button onClick={()=>setDefinition('')}>Clear definition</button>
        </div>
    </div>
  )
}

export default Dictionary