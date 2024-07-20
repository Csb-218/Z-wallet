import React from "react"

export default function NFTs({ nfts }) {
  return (
    <>

      {nfts?.map((nft, index) => {
        return (
          <>
            {/*<!-- Component: Image overlay card --> */}
            <div key={index} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              {/*  <!-- Image --> */}
              <figure className="relative">
                <img
                  src={nft}
                  alt="card "
                  className="aspect-video w-full"
                />
               
              </figure>
            </div>
            {/*<!-- End Image overlay card --> */}
          </>
        )
      })}

    </>
  )
}
