

const TextArea = ({typedSeed,seedAdjust}) => {

    
    return (
        <>
            {/* Component: Rounded base size textarea with helper text  */}
            <div className="relative">
                <textarea 
                id="id-b03" 
                type="text" 
                name="id-b03" 
                rows="3" 
                placeholder="Type Your Seed Phrase Here" 
                className="relative w-full px-4 py-2 text-sm placeholder-transparent transition-all border bg-slate-800 rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-100  invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                value={typedSeed}
                onChange={seedAdjust}
                
                ></textarea>
                <label htmlFor="id-b03" className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-100 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full  before:transition-all before:backdrop-blur-sm peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-400 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                Type Your Seed Phrase Here
                </label>
                {/* <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                    <span> Text field with helper text </span>
                    <span className="text-slate-500"> 1/10 </span>
                </small> */}
            </div>
            {/* End Rounded base size textarea with helper text  */}
        </>
    )
}

export default TextArea