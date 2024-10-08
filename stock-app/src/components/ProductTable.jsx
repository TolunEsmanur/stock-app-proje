import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

const columns = [
  { field: '_id', headerName: '#', width: 90 },
  {
    field: 'categories',
    headerName: 'Categories',
    width: 150,
    editable: true,
  },
  {
    field: 'brands',
    headerName: 'Brands',
    width: 150,
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
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: "actions",
    type: "actions",
    
    getActions: (param) => [
        <GridActionsCellItem icon={ DeleteForeverIcon} label="Delete"/>,
        
       ]
      },
    ];

const rows = [];

export default function ProductTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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
      />
    </Box>
  );
}
