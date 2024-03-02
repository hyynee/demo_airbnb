'use client'
import React,{useCallback,useState} from 'react'
import axios from 'axios';
import {AiFillGithub} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'
import Register from '../components/Register/Register';
import Modal from './Modal';


interface Props  {

}

export default function RegisterModal({}: Props) {
    const registerModal = Register();
    const [isLoading,setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/resgister',data)
        .then(() => {
            registerModal.onClose();
        })
        .catch((errors) => {
            console.log(errors)
        })
        .finally(() => {
            setIsLoading(false);
        })
    }   
  return (
    <Modal
    disabled={isLoading}
    isOpen={registerModal.isOpen}
    title="Register"
    actionLabel="Continue"
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
  />
  )
}