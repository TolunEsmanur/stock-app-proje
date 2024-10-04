import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchFail, fetchStart,getFirmsSuccess } from '../features/stockSlice';



const useStockRequests = () => {
    const {token} = useSelector((state)=>state.auth)
    const dispatch=useDispatch()
 

    const getFirms = async ()=>{
        dispatch(fetchStart())
      try {
        const {data} = await axios(`${process.env.REACT_APP_BASE_URL}/firms`,{
          headers: {Authorization:`Token ${token}`},
        })
        dispatch(getFirmsSuccess())
        console.log(data);
          }catch (error) {
            dispatch(fetchFail())
        console.log(error);
          }
  
    }

    const getSales = async ()=>{
        try {
          const {data} = await axios(`${process.env.REACT_APP_BASE_URL}/sales`,{
            headers: {Authorization:`Token ${token}`},
          })
          console.log(data);
            }catch (error) {
          console.log(error);
            }
    
      }
    return {getFirms, getSales}
}

export default useStockRequests