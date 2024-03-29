// ForgetPas.tsx
import React from 'react';
import '../component.css'

const ForgetPas: React.FC = () => {
    return (
        <div className="h-[70vh] flex items-center justify-center p-4">
            <form className="custom-bgColor p-8 rounded-2xl shadow-2xl border-t max-w-sm w-full">

                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Enter Email
                    </label>
                    <input
                        className="outline-none border border-gray-600 w-full py-2 mb-3 px-3 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
                        id="email"
                        type="email"
                        placeholder="Johndoe@somewhere.com"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="custom-button w-full text-[1rem]"
                       
                    >
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ForgetPas;
