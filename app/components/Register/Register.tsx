import {create} from 'zustand'
interface Props {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const Register = create<Props>((set) => ({
    isOpen: false,
    // isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default Register;
