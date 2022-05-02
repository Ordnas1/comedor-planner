import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  padding-left: ${theme.spacing(11)};
`
);

function NavMenu() {
  const [nestedMenuState, setNestedMenuState] = useState({
    isAlimentosOpen: false,
    isMenuOpen: false,
    isProgramacionOpen: false,
    isSemanaOpen: false,
  });

  function handleAlimentosClick() {
    setNestedMenuState({
      ...nestedMenuState,
      isAlimentosOpen: !nestedMenuState.isAlimentosOpen,
    });
  }

  function handleMenuClick() {
    setNestedMenuState({
      ...nestedMenuState,
      isMenuOpen: !nestedMenuState.isMenuOpen,
    });
  }

  function handleProgramacionClick() {
    setNestedMenuState({
      ...nestedMenuState,
      isProgramacionOpen: !nestedMenuState.isProgramacionOpen,
    });
  }

  function handleSemanaClick() {
    setNestedMenuState({
      ...nestedMenuState,
      isSemanaOpen: !nestedMenuState.isSemanaOpen,
    });
  }

  return (
    <List>
      <ListItemButton onClick={handleAlimentosClick}>
        <ListItemIcon>
          <Kitchen />
        </ListItemIcon>
        <ListItemText primary="Gestionar alimentos" />
        {nestedMenuState.isAlimentosOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={nestedMenuState.isAlimentosOpen}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <NavLink to="/alimentos/crear">
            <NestedNavItem>
              <ListItemText primary="Agregar alimentos" />
            </NestedNavItem>
          </NavLink>
          <NavLink to="/alimentos/ver">
            <NestedNavItem>
              <ListItemText primary="Ver alimentos" />
            </NestedNavItem>
          </NavLink>
        </List>
      </Collapse>

      <ListItemButton onClick={handleMenuClick}>
        <ListItemIcon>
          <SetMeal />
        </ListItemIcon>
        <ListItemText primary="Gestionar menu" />
        {nestedMenuState.isMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={nestedMenuState.isMenuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink to="/menu/crear">
            <NestedNavItem>
              <ListItemText primary="Agregar menu" />
            </NestedNavItem>
          </NavLink>
          <NavLink to="/menu/ver">
            <NestedNavItem>
              <ListItemText primary="Ver lista de menus" />
            </NestedNavItem>
          </NavLink>
        </List>
      </Collapse>

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
          <NavLink to="/programacion/crear">
            <NestedNavItem>
              <ListItemText primary="Añadir a la programación diaria" />
            </NestedNavItem>
          </NavLink>
          <NavLink to="/programacion/actualizar">
            <NestedNavItem>
              <ListItemText primary="Modificar programación diaria existente" />
            </NestedNavItem>
          </NavLink>
          <NavLink to="/programacion/activar">
            <NestedNavItem>
              <ListItemText primary="Marcar horarios como vacios" />
            </NestedNavItem>
          </NavLink>
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
          <NavLink to="/semana/ver">
            <NestedNavItem>
              <ListItemText primary="Ver semana" />
            </NestedNavItem>
          </NavLink>
          <NavLink to="/semana/activar">
            <NestedNavItem>
              <ListItemText primary="Marcar semana vacía" />
            </NestedNavItem>
          </NavLink>
        </List>
      </Collapse>
    </List>
  );
}

export default NavMenu;
