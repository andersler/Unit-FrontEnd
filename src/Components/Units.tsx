import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toPrettyDate } from '../Utils/DateUtils'
import { Unit } from '../Types/Unit'
import { getUnits, deleteUnit } from '../API/UnitController'
import { createPortal } from 'react-dom';
import EditUnitModal from './EditUnitModal'

const Units = () => {
    const logo: string = require("../Assets/threedots.svg").default;
    const [units, setUnits] = useState<Unit[]>([])
    const [activeUnitId, setActiveUnitId] = useState<string>(""); 
    
    useEffect(() => {
        getUnits().then((data) => {
            setUnits(data)
        })
    }, [])

    const handleDelete = (id: string): any => {
        deleteUnit(id).then(() => {
            setUnits(units.filter((unit) => unit.id !== id))
        })
    }

    const handleOpenModal = (id : string) => {
        setActiveUnitId(id); 
    };

    const handleCloseModal = () => {
        setActiveUnitId(""); 

  };
       
    if (units.length === 0)
        return (
            <>
                <h1 className="text-center">Units</h1>
                <p />
                <h3>There are no units</h3>
            </>
        )
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Unit name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Active
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last updated
                        </th>
                        <th scope="col" className="px-6 py-3"></th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {units.map((unit) => (
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            key={uuidv4()}>
                            <td className="px-6 py-4">{unit.name}</td>
                            <td className="px-6 py-4">
                                {unit.isActive ? 'Active' : 'Inactive'}
                            </td>
                            <td className="px-6 py-4">
                                {unit.type || 'No Type'}
                            </td>
                            <td className="px-6 py-4">
                                {toPrettyDate(unit.lastUpdated.toString()) ||
                                    'Not Available'}
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    onClick={() => handleDelete(unit.id)}>
                                    Delete
                                </button>
                            </td>

                            <td className="px-6 py-4">
                                <button onClick={() => handleOpenModal(unit.id)}>
                                    <img src={logo} alt="logo" />
                                </button>
                                {activeUnitId === unit.id &&
                            createPortal(
                                <EditUnitModal
                                    setter={setUnits}
                                    unit={unit} 
                                    onClose={handleCloseModal}/>,
                                document.body
                            )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Units
