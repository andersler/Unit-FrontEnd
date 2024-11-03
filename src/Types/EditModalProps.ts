import { Unit } from '../Types/Unit'
export  type EditUnitModalProps =  {
    onClose: () => void;
      unit: Unit;
      setter: React.Dispatch<React.SetStateAction<Unit[]>>;
  }