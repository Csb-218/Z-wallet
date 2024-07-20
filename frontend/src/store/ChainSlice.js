import {createSlice} from "@reduxjs/toolkit"


const ChainSlice = createSlice({
    name: 'chain',
    initialState:{
        chains:[
            {
                label: "Ethereum",
                value: '0x1',
                symbol:'ETH',
                rpcUrl:''
              },
              {
                label: "Polygon",
                value: '0x89',
                symbol:'MATIC',
                rpcUrl:''
              },
              {
                label: "Avalaunch",
                value: '0xa86a',
                symbol:'AV',
                rpcUrl:'https://site1.moralis-nodes.com/sepolia/a962ac12e9044f7e8f2099d18b82c35e'
              },
              {
                label:'Sepolia',
                value:'0xaa36a7',
                symbol:'SepoliaEth',
                rpcUrl:'https://site1.moralis-nodes.com/sepolia/a962ac12e9044f7e8f2099d18b82c35e'
              }
        ],

        selectedChain:{
            label:'Sepolia',
            value:'0xaa36a7',
            symbol:'SepoliaEth',
            rpcUrl:'https://site1.moralis-nodes.com/sepolia/a962ac12e9044f7e8f2099d18b82c35e'
        }
    },
    
    reducers:{
        selectChain(state,action){
            state.selectedChain = action.payload
        }
    }
})

export const chainActions = ChainSlice.actions
export default ChainSlice
