import url from '../Misc/Url'
import { Unit, RequestUnit } from '../Types/Unit'

export const getUnits = async (): Promise<Unit[]> => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })

        const responseData = await response.json()
        console.log(responseData.message)

        return responseData.units as Unit[]
    } catch (error) {
        console.error('Error fetching units:', error)
        return []
    }
}

export const deleteUnit = async (id: string): Promise<boolean> => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })

        const responseData = await response.json()
        console.log(responseData.message)
        return true
    } catch (error) {
        console.error('Error deleting unit:', error)
        return false
    }
}

export const addUnit = async (unit: RequestUnit): Promise<boolean> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(unit),
        })

        const responseData = await response.json()
        console.log(responseData.message)
        return true
    } catch (error) {
        console.error('Error adding unit:', error)
        return false
    }
}

export const updateUnit = async (unit: Unit): Promise<Unit | null> => {
    try {
        const response = await fetch(`${url}/${unit.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(unit),
        })

        const responseData = await response.json()
        console.log(responseData.message)
        return unit
    } catch (error) {
        console.error('Error updating unit:', error)
        return null
    }
}
