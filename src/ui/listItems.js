import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddBoxtIcon from '@material-ui/icons/AddBox';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import InfoIcon from '@material-ui/icons/Info';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddBoxtIcon />
      </ListItemIcon>
      <ListItemText primary="New Portfolio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InsertChartIcon />
      </ListItemIcon>
      <ListItemText primary="Performance" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About dApp" />
    </ListItem> */}
  </div>
);

export const openListItems = (
  <div>
    <ListSubheader inset>Open Portfolios</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="Bitcoin and Ether&nbsp;2018/01/04" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="2018/06/22" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="2019/01/15" />
    </ListItem>
  </div>
);

export const closedListItems = (
  <div>
    <ListSubheader inset>Closed Portfolios</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="2017/02/06" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="2018/06/04" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="2018/11/28" />
    </ListItem>
  </div>
);

