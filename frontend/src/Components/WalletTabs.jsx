import { useState, useRef, useEffect } from "react"
import { Loaders } from "./Loaders"
import Tokens from "./Tokens"
import NFTs from "./NFTs"
import Transfers from "./Transfers"
import { emptyCart, HappyEtherium } from "../Assets"

export default function TabsLgBasicFullWidth({ tokens, nfts, balance,transfers, isLoading, selectedChain ,seedPhrase,getWallet}) {

  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  })

  const wrapperRef = useRef(null)

  const handleKeyDown = e => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          })
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          })
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          })
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          })
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <>
      {/*<!-- Component: Basic lg sized tab full width --> */}
      <section className="max-w-full text-center" >
        <ul
          className="flex items-center border-b border-slate-200"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-0 text-sm font-medium tracking-wide transition duration-300 hover:text-indigo-400 hover:stroke-indigo-000 focus:text-indigo-200 text-indigo-50  focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 1
                  ? "border-indigo-500 stroke-indigo-500 text-indigo-50 hover:border-indigo-000  hover:text-indigo-400 focus:border-indigo-700 focus:stroke-indigo-700 focus:text-indigo-400 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-100 hover:border-indigo-500 hover:text-indigo-400 focus:border-indigo-400 focus:stroke-indigo-400 focus:text-indigo-400 disabled:text-slate-500"
                }`}
              id="tab-label-1a"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabIndex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1a"
              aria-selected={`${tabSelected.currentTab === 1 ? "true" : "false"
                }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Tokens</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-0 text-sm font-medium tracking-wide transition duration-300 hover:text-indigo-400 hover:stroke-indigo-000 focus:text-indigo-200 text-indigo-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 2
                  ? "border-indigo-500 stroke-indigo-00 text-indigo-50 hover:border-indigo-000  hover:text-indigo-000 focus:border-indigo-700 focus:stroke-indigo-700 focus:text-indigo-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-100 hover:border-indigo-500 hover:text-indigo-400 focus:border-indigo-400 focus:stroke-indigo-400 focus:text-indigo-400 disabled:text-slate-500"
                }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabIndex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${tabSelected.currentTab === 2 ? "true" : "false"
                }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>NFTs</span>
            </button>
          </li>
          <li className="flex-1" role="presentation ">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-0 text-sm font-medium tracking-wide transition duration-300 hover:text-indigo-400 hover:stroke-indigo-000 focus:text-indigo-200  text-indigo-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 3
                  ? "border-indigo-500 stroke-indigo-500 text-indigo-50 hover:border-indigo-000  hover:text-indigo-000 focus:border-indigo-700 focus:stroke-indigo-700 focus:text-indigo-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-100 hover:border-indigo-500 hover:text-indigo-400 focus:border-indigo-400 focus:stroke-indigo-400 focus:text-indigo-400 disabled:text-slate-500"
                }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="3"
              tabIndex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-3a"
              aria-selected={`${tabSelected.currentTab === 3 ? "true" : "false"
                }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>Transfers</span>
            </button>
          </li>
        </ul>
        <div className="">
          <div
            className={`px-0 py-4 ${tabSelected.currentTab === 1 ? "" : "hidden"
              }`}
            id="tab-panel-1a"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabIndex="-1"
          >
            {
              isLoading ?
                <>
                <img src={HappyEtherium} alt="Happy Etherium "/>
                Loading your tokens
                </>
                
                :
                tokens?.length > 0 ? 
                  <Tokens tokens={tokens}/>
                  :
                  <>
                  <img src={emptyCart} alt="empty"/>
                  <p>No tokens found</p>
                  </>
                  
            }
          </div>
          <div
            className={`px-0 py-4 ${tabSelected.currentTab === 2 ? "" : "hidden"
              }`}
            id="tab-panel-2a"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2a"
            tabIndex="-1"
          >
            {
              isLoading ?
                <>
                <Loaders />
                Loading your NFTs
                </>
              :
              nfts?.length > 0 ? 
                <NFTs nfts={nfts}/>
                :
                <>
                <img src={emptyCart} alt="empty"/>
                <p>no NFTs found</p>
                </>
            }
          </div>
          <div
            className={`px-0 py-4 ${tabSelected.currentTab === 3 ? "" : "hidden"
              }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabIndex="-1"
          >
            {
              isLoading ?
                <>
                <Loaders />
                Loading your transfers and balance
                </>
              :
              balance ?
                <>
                  <Transfers balance={balance} selectedChain={selectedChain} seedPhrase={seedPhrase} getWallet={getWallet} />
                </>
                :
                <p>No Transfers found</p>

            }
          </div>
        </div>
      </section>
      {/*<!-- End Basic lg sized tab full width --> */}
    </>
  )
}
