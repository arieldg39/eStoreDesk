import React, { useReducer, useState } from 'react'
import { ProductReducer } from '../reducers/ProductReducer';
import { ProductContext} from '../contexts/ProductContext';
import { axiosDb } from '../config/dashAxios';


const initialProductValue = {
    products: [],
    alertMsg: {},
    isLoading: true
  }

export const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, initialProductValue);
    const [isLoading, setIsLoading] = useState(true)

    const getAllProducts = async() => {

        setIsLoading(true);
        const {data } = await axiosDb.get('/api/products/all');        
        const  products  = data.dataProducts;        
        setIsLoading(false);    
        return data.dataProducts;
    
        // dispatch({
        //   type: 'GETALL-PRODUCTS',
        //   payload: {
        //      products: products
        //   }
        // });
      }



    return (      
        <ProductContext.Provider value={{
            state,
            isLoading,
            getAllProducts
        }}>
            { children }
        </ProductContext.Provider>
            
    )
}
