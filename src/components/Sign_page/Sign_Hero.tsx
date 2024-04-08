import React from 'react';
import { Link } from 'react-router-dom';
import '../component.css'
// import { Link } from 'react-router-dom';

const Sign_Hero: React.FC = () => {
    return (
        <div className="h-[90vh] flex items-center justify-center  border-white p-4">
            <div className="custom-bgColor p-8 rounded-2xl shadow-2xl border-t max-w-sm w-full">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Enter email
                    </label>
                    <input  className="outline-none border border-gray-600 w-full py-2 mb-3  px-3 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
                       id="email"
                        type="email"
                        placeholder="Johndoe@somewhere.com"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white  text-sm font-bold mb-2" htmlFor="password">
                        Enter password
                    </label>

                    <input  className="outline-none border border-gray-600 w-full py-2 mb-3  px-3 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
                        id="password"
                        type="password"
                        placeholder="********"
                    />
                      {/* <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-400">
                        Forgot password?
                    </Link> */}
                     <Link to="/forget" className="inline-block align-baseline  text-sm text-bluee hover:text-blue-400" >
                        Forgot password?
                    </Link>


                </div>
                <div className="flex items-center justify-between">
                    <button className="custom-button w-full text-[1rem]"
              
                    >
                        Sign in
                    </button>
                </div>
                <div className="mt-4">
                    <Link
                        className="bg-transparent hover:bg-blue-500 text-blue-200  hover:text-white py-2 px-4 border border-bluee hover:border-transparent rounded-xl w-full"
                        type="button"
                        to="/signup"
                    >
                        Don't have an account? Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sign_Hero;
