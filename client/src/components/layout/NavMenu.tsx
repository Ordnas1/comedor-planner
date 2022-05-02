import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import {
  SetMeal,
  Kitchen,
  Today,
  CalendarViewWeek,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

const NestedNavItem = styled(ListItemButton)(
  ({ theme }) => `
  padding-left: ${theme.spacing(9)};
`
);

function NavMenu() {
  const [nestedMenuState, setNestedMenuState] = useState({
    isProgramacionOpen: false,
    isSemanaOpen: false,
  });

  function handleProgramacionClick() {
    setNestedMenuState({
      ...nestedMenuState,
      isProgramacionOpen: !nestedMenuState.isProgramacionOpen,
    });
    console.log(nestedMenuState);
  }

  function handleSemanaClick() {
    setNestedMenuState({
      ...nestedMenuState,
      isSemanaOpen: !nestedMenuState.isSemanaOpen,
    });
    console.log(nestedMenuState);
  }

  return (
    <List>
      <ListItemButton>
        <ListItemIcon>
          <Kitchen />
        </ListItemIcon>
        <ListItemText primary="Agregar alimentos" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SetMeal />
        </ListItemIcon>
        <ListItemText primary="Gestionar menu" />
      </ListItemButton>
      <ListItemButton onClick={handleProgramacionClick}>
        <ListItemIcon>
          <Today />
        </ListItemIcon>
        <ListItemText primary="Gestionar programación diaria" />
        {nestedMenuState.isProgramacionOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={nestedMenuState.isProgramacionOpen}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <NestedNavItem>
            <ListItemText primary="Modificar programación diaria" />
          </NestedNavItem>
          <NestedNavItem>
            <ListItemText primary="Marcar horarios como vacios" />
          </NestedNavItem>
        </List>
      </Collapse>
      <ListItemButton onClick={handleSemanaClick}>
        <ListItemIcon>
          <CalendarViewWeek />
        </ListItemIcon>
        <ListItemText primary="Gestionar semana" />
        {nestedMenuState.isSemanaOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={nestedMenuState.isSemanaOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NestedNavItem>
            <ListItemText primary="Ver semana" />
          </NestedNavItem>
          <NestedNavItem>
            <ListItemText primary="Marcar semana vacía" />
          </NestedNavItem>
        </List>
      </Collapse>
    </List>
  );
}

export default NavMenu;
