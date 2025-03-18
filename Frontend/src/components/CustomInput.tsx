import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form';

type CustomInputProps = {
    inputType: string;
    id: string;
    register: UseFormRegisterReturn; 
    placeHolder: string;
    error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ inputType, id, placeHolder, error, register }) => {
    return (
        <div className='relative w-[80%]'>
            <input placeholder='' id={id} {...register} type={inputType} className='peer h-10 w-full border-b-1 border-gray-500 text-white focus:outline-none focus:border-[#645fc5]' />
            <label className='absolute left-0 -top-2.5 text-[#645fc5] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 transition-all peer-focus:-top-2.5 peer-focus:text-[#645fc5] peer-focus:text-sm' htmlFor={id}>{placeHolder}</label>
            {error && <p className="text-red-500 text-sm flex w-[200px] h-[30px]">{error}</p>}
        </div>
    )
}

export default CustomInput;