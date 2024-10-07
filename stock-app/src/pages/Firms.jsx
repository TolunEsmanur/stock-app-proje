import { useEffect } from "react"
import useStockRequests from "../services/useStockRequests"
import { Button, Typography } from "@mui/material"

// import { useSelector } from "react-redux"
// import axios from "axios"

// export const getFirms = async () => {
//   try {
//     const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/firms`, {
//       headers: { Authorization: `Token ${token}` },
//     })
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

const Firms = () => {
  // const { token } = useSelector((state) => state.auth)
  // const { getFirms, getSales } = useStockRequests()

  const { getStock } = useStockRequests()

  //? Sayfa yüklendikten sonra firmaları getirmek için
  useEffect(() => {
    // getFirms()
    // getSales()
    getStock("firms")
    
  }, [])

  return <div>
    <Typography variant="h5" color="red" mb={2}>Firms</Typography>
    <Button variant="contained">NEW FIRM</Button>

   </div>
}

export default Firms
