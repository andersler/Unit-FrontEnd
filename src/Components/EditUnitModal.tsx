import { Unit } from '../Types/Unit'
import { updateUnit } from '../API/UnitController'
import React, { useState } from 'react'
import { EditUnitModalProps } from '../Types/EditModalProps'

export default function EditUnitModal({
    setter,
    unit,
    onClose,
}: EditUnitModalProps) {
    const [name, setName] = useState<string>(unit.name)
    const [type, setType] = useState<string>(unit.type)
    const [isActive, setIsActive] = useState<boolean>(unit.isActive)

    const logo: string = require('../Assets/close.svg').default

    const handleUpdate = async (unit: Unit): Promise<void> => {
        updateUnit(unit).then((success) => {
            if (success) {
                return unit
            }
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const updatedUnit: Unit = { ...unit, name, type, isActive }
        handleUpdate(updatedUnit)
        setter((prev) => prev.map((u) => (u.id === unit.id ? updatedUnit : u)))
        onClose()
    }

    return (
        <div className="relative overflow-x-auto">
            <form onSubmit={handleSubmit}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4" style={{ width: '17%' }}>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                    className="w-full"
                                />
                            </td>
                            <td
                                className="px-6 py-4"
                                style={{ width: '12.8%' }}
                            >
                                <input
                                    type="checkbox"
                                    checked={isActive}
                                    onChange={(e) =>
                                        setIsActive(e.target.checked)
                                    }
                                />
                            </td>

                            <td className="px-6 py-4">
                                <input
                                    type="text"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    placeholder="Type"
                                />
                            </td>
                            <td className="px-6 py-4"></td>

                            <td
                                className="px-6 py-4"
                                style={{ width: '20.1%' }}
                            >
                                <button
                                    className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={onClose}
                                    className="text-gray-700 dark:text-gray-300 hover:underline"
                                >
                                    <img src={logo} alt="logo" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
