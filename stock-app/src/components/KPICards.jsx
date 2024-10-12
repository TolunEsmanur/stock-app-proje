import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaymentsIcon from '@mui/icons-material/Payments';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

const KPICards = () => {
  const cardData=[{
    id:1,
    icon:<MonetizationOnIcon/>,
    title:"sales",
    bgColor:"red",
    color:"darkred"

  },

  {
    id:2,
    icon:<ShoppingBasketIcon/>,
    title:"profit",
    bgColor:"red",
    color:"darkred"

  },

  {
    id:3,
    icon:<PaymentsIcon/>,
    title:"purchases",
    bgColor:"red",
    color:"darkred"

  },

]
  return (
  <Stack>
    {cardData.map((item)=>(
    <Paper elevation={5}> 
    <Avatar sx={{ bgcolor: "red" }}>{item.icon}</Avatar>
    </Paper>
    ))}
  </Stack>
    
    )}
    


export default KPICards