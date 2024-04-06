import React, { useContext, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box, Grid, IconButton, Paper, Typography } from '@mui/material';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Chip } from '@mui/material';
import { ProductContext } from '../../contexts/ProductContext';
// import { useNavigate } from 'react-router-dom';





export const ProductsPage = () => {

  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const { getAllProducts, state, isLoading } = useContext(ProductContext);
  const [rowsData, setRowsData] = useState({});
//   const navigate = useNavigate();


useEffect(() => {
 init();
}, [])

const init = async() => {
    const data = await getAllProducts();
    console.log(data);
    setRowsData(data);
}

  const getButtonsActions = () => {

        return (
        <>
            <IconButton
                color='info'
                title='Editar'
                // onClick={() => navigate(`/usuarios/editar/${row.id}`)}
            >
                <DriveFileRenameOutlineIcon
                fontSize='medium'
                color='info'
                />
            </IconButton>

            <IconButton
                color='warning'
                title='Deshabilitar Usuario'
            >
                <DeleteOutlineIcon
                fontSize='medium'
                color='danger'
                />
            </IconButton>
        </>
        )
    }

    const columns = [
    
        {
            flex: 0.1,
            field: 'idarticulo',
            headerName: 'ID',
            minWidth: 50,
        },

        {
            flex: 0.15,
            field: 'image',
            headerName: 'Imagen',
            minWidth: 100,
            renderCell: ({ row }) => {
                return(                    
                <Avatar alt="Remy Sharp" src={row.imagen} sx={{ width: 40, height: 40 }}/>
                )
            }
        },        
        {
            flex: 0.50,
            field: 'articulo',
            headerName: 'Detalle',
            minWidth: 250,
        },
        {
            flex: 0.25,
            field: 'marca',
            headerName: 'Marca',
            minWidth: 150,
        }, 
        {
            flex: 0.1,
            field: 'preciocosto',
            headerName: 'Costo',
            minWidth: 80,
            renderCell: ({ row }) => {
                return (
                <Box>
                    <Chip label={'$'+row.preciocosto} color="default" size="small" sx={{ width: 80, justifyContent: 'center'}}/>
                </Box>
                )
            }
            /* renderCell: ({ row }) => {
                return(<Typography>${row.preciocosto}</Typography>)
              }            */
        }, 
        {
            flex: 0.1,
            field: 'porcentaje',
            headerName: '%',
            minWidth: 80,
            renderCell: ({ row }) => {
                return (
                <Box>
                    <Chip label={row.porcentaje} color="default" size="small" sx={{ width: 80, justifyContent: 'center'}}/>
                </Box>
                )
            }
        }, 
        {
            flex: 0.1,
            field: 'precioventa1',
            headerName: 'Venta',
            minWidth: 80, 
            renderCell: ({ row }) => {
                return (
                <Box>
                    <Chip label={'$'+row.precioventa1} color="default" size="small" sx={{ width: 80, justifyContent: 'center'}}/>
                </Box>
                )
            }         
        }, 
        {
            flex: 0.15,
            field: 'stock',
            headerName: 'Stock',
            minWidth: 80,           
        }, 
        {
            flex: 0.15,
            field: 'stockminimo',
            headerName: 'Stock Minimo',
            minWidth: 80,          
        }, 

        {
            flex: 0,
            field: 'acciones',
            headerName: 'Acciones',
            minWidth: 150,
            renderCell: ({ row }) => {
                return (
                <Box>
                    {getButtonsActions()}
                </Box>
                )
            }
        },
    ];


    
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sx={{  
                    marginLeft: 3, 
                }}
            >
                <Typography 
                    variant='h5' 
                    fontFamily={'fantasy'}
                >
                    Lista de Productos
                </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <Paper>
                <div style={{ width: '100%', height: 650 }}>
                    <DataGrid 
                        loading={isLoading}
                        // autoHeight
                        // checkboxSelection
                        rows={rowsData} 
                        columns={columns} 
                        getRowId={(row) => row.idarticulo}
                        paginationMode='client'
                        pageSize={pageSize}
                        page={page}
                        // pageSizeOptions={[10, 25, 50]}
                        sx={{ 
                            boxShadow: 1,
                            border: 1,
                            borderColor: '#ccc',
                            '& .MuiDataGrid-columnHeaders': { 
                            borderRadius: 0, 
                            backgroundColor: "rgba(0,141,255,0.2)" 
                            } 
                        }}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        onPageChange={(newPage) => setPage(newPage)}
                        // localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                    />
                </div>
                </Paper>
            </Grid>
        </Grid>
    )
}