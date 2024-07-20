import React from 'react'

const SeedPhraseCard = ({phrase}) => {
    return (
        <>
            {/*<!-- Component: Basic card --> */}
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <div className="p-6">
                    
                    <p>
                       {phrase}
                    </p>
                </div>
            </div>
            {/*<!-- End Basic card --> */}
        </>

    )
}

export default SeedPhraseCard