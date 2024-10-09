import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete"
import { useSelector } from 'react-redux';

const columns = [
  { field: '_id', headerName: '#', width: 90 },
  {
    field: 'categoryId',
    headerName: 'Categories',
    width: 150,
    valueGetter: (value)=>value?.name,
    editable: true,
  },
  {
    field: 'brandId',
    headerName: 'Brands',
    width: 150,
    valueGetter: (value)=>value?.name,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Stock',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: "actions",
    headerName:'Operations',
    type: "actions",
    
    getActions: (param) => [
        <GridActionsCellItem icon={ <DeleteIcon/>} label="Delete"/>,
        
       ]
      },
    ];

const getRowId = (row)=>row._id

export default function ProductTable() {

  const {products} = useSelector((state)=>state.stock)
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
