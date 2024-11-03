import React from 'react'
import Units from './Components/Units'
import AddUnit from './Components/AddUnit'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <ul className="flex space-x-2">
                <li>
                    <a className="dropdown-item" href="/">
                        Units
                    </a>
                </li>

                <li>
                    <a className="dropdown-item" href="/add-unit">
                        Add Unit
                    </a>
                </li>
            </ul>
            <p />
            <Routes>
                <Route path="/" element={<Units />} />
                <Route path="/add-unit" element={<AddUnit />} />
                <Route />
            </Routes>
        </div>
    )
}
export default App
