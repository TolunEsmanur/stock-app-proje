
import React, { useEffect } from 'react'
import useStockRequests from '../services/useStockRequests'


  const Firms = () => {

    const {getFirms, getSales} = useStockRequests()
    
  //sayfa yüklendikten sonra sayfaları getir!
  useEffect(() => {
    getFirms()
    getSales()
  
   
  }, [])

  
  return (
    <div>Firms</div>
  )
}

export default Firms