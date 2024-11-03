import { FormEvent, useState } from 'react'
import { RequestUnit } from '../Types/Unit'
import { addUnit } from '../API/UnitController'
import { ToastContainer, toast } from 'react-toastify';

const AddUnit = () => {
    const [name, setName] = useState<string>('')
    const [isActiveString, setIsActiveString] = useState<string>('Active')
    const [type, setType] = useState<string>('')
    const notify = () => toast("Wow so easy!");

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault()
        const isActive = isActiveString === 'Active' ? true : false
        const unit: RequestUnit = { name: name, isActive: isActive, type: type }
        console.log(unit)
        addUnit(unit).then((success) => {
            if (success) {
                console.log('Unit added successfully')
            } else {
                alert('Error adding unit')
            }
        })

        setTimeout(() => {
            resetForm()
        }, 1500)
    }

    const resetForm = () => {
        setName('')
        setIsActiveString('')
        setType('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 px-4">
                    <label
                        htmlFor="id"
                        className="block text-gray-700 text-sm font-bold mb-2">
                        Unit Name:
                    </label>
                    <input
                        id="id"
                        placeholder="SensorA, AktuatorB, etc.."
                        type="text"
                        className="shadow appearance-none rounded w-50 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                </div>

                <div className="mb-3 px-4">
                    <label
                        htmlFor="id"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Is Active:
                    </label>
                    <input
                        id="id"
                        type="text"
                        className="shadow appearance-none rounded w-50 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(event) =>
                            setIsActiveString(event.target.value)
                        }
                        value={isActiveString}
                    />
                </div>

                <div className="mb-3 px-4">
                    <label
                        htmlFor="type"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Unit type:
                    </label>
                    <input
                        id="type"
                        placeholder="Sensor, Aktuator.."
                        type="text"
                        className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(event) => setType(event.target.value)}
                        value={type}
                    />
                </div>

                <div className="mb-3 px-4">
                    <button onClick={notify} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        Save Unit
                    </button>
                    <ToastContainer />
                </div>
            </form>
        </>
    )
}
export default AddUnit
