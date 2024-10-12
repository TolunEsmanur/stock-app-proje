import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaymentsIcon from '@mui/icons-material/Payments';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { deepPurple, pink, orange} from '@mui/material/colors';
import { Box, Typography } from '@mui/material';

const KPICards = () => {
  const cardData=[{
    id:1,
    icon:<MonetizationOnIcon sx={{fontSize:"2rem"}}/>,
    title:"sales",
    bgColor: deepPurple[100],
    color: deepPurple[500],
    amount: "$12345"

  },

  {
    id:2,
    icon:<ShoppingBasketIcon sx={{fontSize:"2rem"}}/>,
    title:"profit",
    bgColor:pink[100],
    color: pink[900],
    amount: "$12345"

  },

  {
    id:3,
    icon:<PaymentsIcon sx={{fontSize:"2rem"}}/>,
    title:"purchases",
    bgColor: orange[100],
    color: orange[900],
    amount: "$12345"

  },

]
  return (
  <Stack justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"} flexDirection={"row"} gap={2} >
    {cardData.map((item)=>(
    <Paper elevation={5} sx={{display:"flex", width:275, p:1, gap:3 }}> 
    <Avatar sx={{width:60, height:60, backgroundColor:item.bgColor, color:item.color, ml:3 }}>{item.icon}</Avatar>
    <Box>
      <Typography variant='button'>{item.title}</Typography>
      <Typography variant='h5'>{item.amount}</Typography>
    </Box>
    </Paper>
    ))}
  </Stack>
    
    )}
    


export default KPICards