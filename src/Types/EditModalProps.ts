import { Unit } from '../Types/Unit'
export type EditUnitModalProps = {
    setter: React.Dispatch<React.SetStateAction<Unit[]>>
    onClose: () => void
    unit: Unit
}
