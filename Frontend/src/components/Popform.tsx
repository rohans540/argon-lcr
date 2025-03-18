import React from 'react'

type PopformProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Popform: React.FC<PopformProps> = ({ title, open, onClose, children, onSubmit}) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-50 ${open ? 'transition-opacity duration-300 opacity-100' : 'transition-opacity duration-300 opacity-0 pointer-events-none'
      }`}>
      <div className="relative bg-[#2c2c37] rounded-lg p-8 max-w-[600px] w-full shadow-md">
        <button onClick={onClose} className="absolute top-[10px] right-[20px] bg-transparent border-none text-[24px] cursor-pointer text-primary transition-colors duration-300 hover:text-[#645fc5]">
          &times;
        </button>
        <h2 className='font-poppins text-white'>{title}</h2>
        <form className='mt-[50px] flex flex-col gap-[20px] items-start' onSubmit={onSubmit}>
          {children}
        </form>
      </div>

    </div>
  )
}

export default Popform