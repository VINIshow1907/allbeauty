import * as React from 'react';
import {Link, Router} from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  
    { field: 'nomeprofissional', headerName: 'NOME' , renderCell: (params) => <Link to={`/perfilprofissional/${params.id}`}>{params.value}</Link> },
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
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
      
    );
  }
