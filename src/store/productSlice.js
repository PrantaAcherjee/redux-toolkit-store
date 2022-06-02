import { createSlice } from "@reduxjs/toolkit";

export const STATUSES=Object.freeze({
   IDLE:'idle',
   ERROR:'error',
   LOADING:'loading'     
})

const initialState={
 data:[],
 status:STATUSES.IDLE,
};
const productSlice=createSlice({
 name:'product',
 initialState,
 reducers:{
  setProducts(state,action){
   state.data = action.payload  
  },      
  setStatus(state,action){
     state.status=action.payload  
  }      
 }

})

export const {setProducts,setStatus}=productSlice.actions;
export default productSlice.reducer;

// Thunks middleware
export function fetchProducts(){
 return async function fetchProductsThunk(dispatch,getState){
         dispatch(setStatus(STATUSES.LOADING))
         try{
         const res=await fetch('https://fakestoreapi.com/products');
         const data=await res.json();
         dispatch(setProducts(data));
         dispatch(setStatus(STATUSES.IDLE));
         }
         catch(err){
         console.log(err)
         dispatch(setStatus(STATUSES.ERROR))
         }
 }
}
