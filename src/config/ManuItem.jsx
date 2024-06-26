import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AddBox, ListAltOutlined, ProductionQuantityLimits } from '@mui/icons-material';
import { Link } from 'react-router-dom';



export const mainListItems = (    
    <React.Fragment>
        <ListItemButton LinkComponent={Link} to='/dashboard'>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard"  />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} to={'/productos'}>
        <ListItemIcon>
            <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Productos" />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} to={'/usuarios'}>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} to={'/estadisticas'}>
        <ListItemIcon>
            <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Estadicticas" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
      {/*   <ListSubheader component="div" inset>
        Saved reports
        </ListSubheader>
        <ListItemButton>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Ventas" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Stock de Productos" />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Pedidos" />
        </ListItemButton> */}
    </React.Fragment>
);