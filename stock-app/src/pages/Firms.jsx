
import React, { useEffect } from 'react'
import useStockRequests from '../services/useStockRequests'


  const Firms = () => {

    const {getFirms, getSales, getStock} = useStockRequests()
    
  //sayfa yüklendikten sonra sayfaları getir!
  useEffect(() => {
    // getFirms()
    // getSales()
    getStock("firms")
    getStock("sales")
  
   
  }, [])

  
  return (
    <div>Firms</div>
  )
}

export default Firms