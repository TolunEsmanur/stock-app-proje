import { useEffect, useState } from "react"
import useStockRequests from "../services/useStockRequests"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ProductModal from "../components/ProductModal"


const Products = () => {
  

  const { getStock } = useStockRequests()
 

  const initialState= {image:"", address:"", phone:"", name:""}
  const [data,setData]=useState(initialState)


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setData(initialState)
  }

  


  
  useEffect(() => {
    
    getStock("products")
    
  }, [])
  console.log(firms);

  return (
  <div>
    <Typography variant="h5" color="error" mb={2}>Products</Typography>
    <Button variant="contained" sx={{mb:2}} onClick={handleOpen}>NEW PRODUCT</Button>

    <ProductModal open={open} handleClose={handleClose} data={data} setData={setData} />

    


   </div>
   )
}

export default Products
