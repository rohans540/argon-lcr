import React from 'react'
import { MoonLoader } from 'react-spinners';

type LoaderProps = {
    loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm z-50 
        transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} >
            <MoonLoader
                color='#645fc5'
                cssOverride={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                loading={loading}
            />
        </div>
    )
}

export default Loader