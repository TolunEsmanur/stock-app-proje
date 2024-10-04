import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Firm = () => {
  const {token} = useSelector((state)=>state.auth)

  const getFirm = async ()=>{
    try {
      const {data} = await axios(`${process.env.REACT_APP_BASE_URL}/firms`,{
        headers: {Authorization:`Token ${token}`},
      })
        }catch (error) {
      console.log(error);
        }

  }
  //sayfa yüklendikten sonra sayfaları getir!
  useEffect(() => {
    getFirm()
  
   
  }, [])

  
  return (
    <div>Firm</div>
  )
}

export default Firm