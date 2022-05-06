import { Grid, Paper, styled, Box, Typography } from "@mui/material";
import React from "react";

const mockData = {
  header: "Semana 1: del 25 al 29 de abril del 2022",
  data: [
    {
      dia: "Lunes 25",
      desayuno: {
        alimentos: [
          "Jugo de papaya",
          "Kiwicha con leche",
          "Pan con tortilla de verdura",
          "Pan con mantequilla",
        ],
        infoNutricional: {
          calorias: 573.86,
          proteinas: 13.67,
          grasas: 27.63,
          carbohidratos: 97.34,
        },
      },
      almuerzo: {
        alimentos: [
          "Sopa de verduras",
          "Estofado de res",
          "Papa al horno",
          "Arroz graneado",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1045.55,
          proteinas: 45.24,
          grasas: 21.71,
          carbohidratos: 195.75,
        },
      },
      cena: {
        alimentos: [
          "Crema de verduras",
          "Coliflor saltada con pollo",
          "Papa frita",
          "Arroz blanco",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1110.43,
          proteinas: 39.3,
          grasas: 27.72,
          carbohidratos: 230.64,
        },
      },
    },
    {
      dia: "Martes 26",
      desayuno: {
        alimentos: [
          "Jugo de papaya",
          "Kiwicha con leche",
          "Pan con tortilla de verdura",
          "Pan con mantequilla",
        ],
        infoNutricional: {
          calorias: 573.86,
          proteinas: 13.67,
          grasas: 27.63,
          carbohidratos: 97.34,
        },
      },
      almuerzo: {
        alimentos: [
          "Sopa de verduras",
          "Estofado de res",
          "Papa al horno",
          "Arroz graneado",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1045.55,
          proteinas: 45.24,
          grasas: 21.71,
          carbohidratos: 195.75,
        },
      },
      cena: {
        alimentos: [
          "Crema de verduras",
          "Coliflor saltada con pollo",
          "Papa frita",
          "Arroz blanco",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1110.43,
          proteinas: 39.3,
          grasas: 27.72,
          carbohidratos: 230.64,
        },
      },
    },
    {
      dia: "Miercoles 27",
      desayuno: {
        alimentos: [
          "Jugo de papaya",
          "Kiwicha con leche",
          "Pan con tortilla de verdura",
          "Pan con mantequilla",
        ],
        infoNutricional: {
          calorias: 573.86,
          proteinas: 13.67,
          grasas: 27.63,
          carbohidratos: 97.34,
        },
      },
      almuerzo: {
        alimentos: [
          "Sopa de verduras",
          "Estofado de res",
          "Papa al horno",
          "Arroz graneado",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1045.55,
          proteinas: 45.24,
          grasas: 21.71,
          carbohidratos: 195.75,
        },
      },
      cena: {
        alimentos: [
          "Crema de verduras",
          "Coliflor saltada con pollo",
          "Papa frita",
          "Arroz blanco",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1110.43,
          proteinas: 39.3,
          grasas: 27.72,
          carbohidratos: 230.64,
        },
      },
    },
    {
      dia: "Jueves 28",
      desayuno: {
        alimentos: [
          "Jugo de papaya",
          "Kiwicha con leche",
          "Pan con tortilla de verdura",
          "Pan con mantequilla",
        ],
        infoNutricional: {
          calorias: 573.86,
          proteinas: 13.67,
          grasas: 27.63,
          carbohidratos: 97.34,
        },
      },
      almuerzo: {
        alimentos: [
          "Sopa de verduras",
          "Estofado de res",
          "Papa al horno",
          "Arroz graneado",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1045.55,
          proteinas: 45.24,
          grasas: 21.71,
          carbohidratos: 195.75,
        },
      },
      cena: {
        alimentos: [
          "Crema de verduras",
          "Coliflor saltada con pollo",
          "Papa frita",
          "Arroz blanco",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1110.43,
          proteinas: 39.3,
          grasas: 27.72,
          carbohidratos: 230.64,
        },
      },
    },
    {
      dia: "Viernes 29",
      desayuno: {
        alimentos: [
          "Jugo de papaya",
          "Kiwicha con leche",
          "Pan con tortilla de verdura",
          "Pan con mantequilla",
        ],
        infoNutricional: {
          calorias: 573.86,
          proteinas: 13.67,
          grasas: 27.63,
          carbohidratos: 97.34,
        },
      },
      almuerzo: {
        alimentos: [
          "Sopa de verduras",
          "Estofado de res",
          "Papa al horno",
          "Arroz graneado",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1045.55,
          proteinas: 45.24,
          grasas: 21.71,
          carbohidratos: 195.75,
        },
      },
      cena: {
        alimentos: [
          "Crema de verduras",
          "Coliflor saltada con pollo",
          "Papa frita",
          "Arroz blanco",
          "Fruta de la estación",
          "Infusión",
          "Pan",
        ],
        infoNutricional: {
          calorias: 1110.43,
          proteinas: 39.3,
          grasas: 27.72,
          carbohidratos: 230.64,
        },
      },
    },
  ],
};

const GridColumn = styled(Paper)(
  ({ theme }) => `
  padding: ${theme.spacing(1)};
  height: 100%;
`
);

function Read() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100% - 140px) " /* 140px of toolbar */,
      }}
    >
      <h1>Read semana</h1>
      <Box sx={{ height: "100%" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          {mockData.data.map((day) => (
            <Grid item xs={2}>
              <GridColumn>
                <Paper elevation={0}>
                  <Typography variant="subtitle1" align="center">
                    {day.dia}
                  </Typography>
                </Paper>
              </GridColumn>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Read;
