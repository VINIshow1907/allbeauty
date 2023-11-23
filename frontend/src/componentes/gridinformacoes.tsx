import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'idprofissional', headerName: 'ID' },
    { field: 'nomeprofissional', headerName: 'NOME' },
    { field: 'estadoprofissional', headerName: 'ESTADO' },
    { field: 'cidadeprofissional', headerName: 'CIDADE' },
    { field: 'descricaoprofissional', headerName: 'DESCRICAO', flex: 1 },

  ];
  interface props {
    profissionais: any
  }
  export default function gridinformacoesprofissional({profissionais}:props) {
    return (
      <Box sx={{ height: 400,display:'flex', justifyContent: 'center', alignItems: 'center' }}>
        <DataGrid
        getRowId={(row:any) => row.idprofissional}
          rows={profissionais}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
  }