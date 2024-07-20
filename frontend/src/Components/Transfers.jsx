import { useState,useEffect } from 'react'
import { ethers } from 'ethers';
import { Loaders } from './Loaders';
import { useMutation } from '@tanstack/react-query';
import { Transfer } from '../Services/service';
import {  toast,ToastContainer } from 'react-toastify';

const Transfers = ({ balance, selectedChain, seedPhrase, getWallet }) => {


    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    
    function handleTo(e) {
        setTo(e.target.value)
    }

    function handleAmount(e) {
        setAmount(e.target.value)
    }

    function extractNumbers(inputString) {
        // Check if input is a string
        if (typeof inputString !== 'string') {
            throw new Error('Input must be a string');
        }
    
        // Regular expression to match numbers
        const regex = /\d+/g;
        
        // Extract numbers from the string
        const matches = inputString.match(regex);
        
        // If no matches found, return an empty array
        if (!matches) {
            return [];
        }
    
        // Convert matches to numbers and return
        return matches.map(Number);
    }

    const {data,isError,isPending,mutate} = useMutation({
        mutationKey:["Transaction"],
        mutationFn:()=>Transfer(selectedChain,seedPhrase,to, amount),
        onSuccess:()=> {toast.success('🦄 Amount Transferred', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        },
        onError:(err)=>{
            console.error(err)

            const numbers = extractNumbers(err?.info?.error?.message);

            const text = 
            `Req. gas:${numbers[0]/10**18},\n
            Amount : ${numbers[14]/10**18},\n
            Balance : ${numbers[13]/10**18},\n
            Req. balance : ${(numbers[0]/10**18)+(numbers[13]/10**18)}
            `
            toast.error(text, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    })

    useEffect(()=>{
       data?.reciept?.status === 1 && getWallet()
    },[data,getWallet])

    

    return (
        <div>
            <ToastContainer/>
            <p className='text-2xl'>Native Balance</p>
            <p>{balance / 10 ** 18}</p>
            <p>{selectedChain?.symbol}</p>


            <div className='mt-10'>
                {   
                    isPending ?
                        <>
                            <Loaders />
                            Processing your transaction ...
                        </>
                        :

                        <>
                            <p className='text-base'>Transfer your native tokens</p>
                            {/* Component: Rounded basic input   */}
                            <div className="relative my-6">
                                <input
                                    id="id-01"
                                    type="text"
                                    name="id-01"
                                    placeholder="to"
                                    value={to}
                                    onChange={handleTo}
                                    className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                                <label htmlFor="id-01" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\ua0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                    To :
                                </label>
                            </div>
                            {/* End Rounded basic input   */}

                            {/* Component: Rounded basic input   */}
                            <div className="relative my-6">
                                <input
                                    id="id-02"
                                    type="text"
                                    name="id-02"
                                    value={amount}
                                    onChange={handleAmount}
                                    placeholder="amount"
                                    className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                                <label htmlFor="id-02" className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\ua0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                    Amount:
                                </label>
                            </div>
                            {/* End Rounded basic input   */}

                            {/* Component: Base primary basic button */}
                        </>

                }


                {to && amount ?

                    !isPending &&
                        <button
                            className={`inline-flex w-full items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300 disabled:shadow-none`}
                            onClick={mutate}
                        >
                            <span>Transfer </span>
                        </button>
                        :
                        <>
                        </>
                }

                {/* End Base primary basic button */}
            </div>
        </div>
    )
}

export default Transfers