"use client"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';
import Grafico from '@/components/Grafico';
import FilterButton from '@/components/FilterButton';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { styled } from '@mui/material';
import TextInfo from '@/components/TextInfo';


const Alerta = ({ title, text, type }) => {
  return (
    <Alert severity={type} sx={{ mt: 1, mb: 1 }}>
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
  );
};


const JSON_EXAMPLE = {
  resume: {
    faturamento: '12.535',
    cadastros: '200',
    assinaturas: '100',
    agendamentos: '350',
    renovasoes: '26',
    expirados: '35'
  },
  faturamento: {
    x: ['1', '2', '3', '4', '5', '6', '7'],
    data: [200, 118, 400, 175, 159, 358, 290]
  },
  cadastros: {
    x: ['1', '2', '3', '4', '5', '6', '7'],
    data: [2, 8, 4, 15, 5, 3, 9]
  },
  assinaturas: {
    x: ['1', '2', '3', '4', '5', '6', '7'],
    data: [2, 1, 10, 3, 2, 11, 3]
  },
  agendamentos: {
    x: ['1', '2', '3', '4', '5', '6', '7'],
    data: [12, 18, 34, 25, 15, 23, 19]
  }
};


const FlexRow = styled(Grid)`
    display: flex;
    flex-direction: row;
`;

const FlexGrid = styled(Grid)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 18px;
  margin-bottom: 12px;
`;

const ContainerText = styled(Box)`
    padding-left: 2px;
    margin-top: 2px;
`;

const Spacing = styled(Box)`
  flex: 1;
`;

export default function Home() {



  const changeFilter = (filter) => {
    console.log(filter)
  };


  return (
    <Box>

      <FlexRow container columnSpacing={1}>
        <FlexGrid>
          <ContainerText>
            <TextInfo size={'24px'} color={'#3A9256'} bold sx={{ paddingLeft: 0 }}>
              Resumo
            </TextInfo>
          </ContainerText>
          <FilterButton onChange />
        </FlexGrid>
      </FlexRow>

      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid xs={6} sm={6} md={4} lg={4}>
          <MediaCard
            heading={JSON_EXAMPLE.resume.faturamento}
            text="Faturamento"
          />
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4}>
          <MediaCard
            heading={JSON_EXAMPLE.resume.cadastros}
            text="Cadastros"
          />
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4}>
          <MediaCard
            heading={JSON_EXAMPLE.resume.assinaturas}
            text="Assinaturas"
          />
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4}>
          <MediaCard
            heading={JSON_EXAMPLE.resume.agendamentos}
            text="Agendamentos"
          />
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4}>
          <MediaCard
            heading={JSON_EXAMPLE.resume.renovasoes}
            text="Renovações"
          />
        </Grid>
        <Grid xs={6} sm={6} md={4} lg={4}>
          <MediaCard
            heading={JSON_EXAMPLE.resume.expirados}
            text="Expiradas"
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid sx={{ width: '100%' }}>
          <Grafico
            x={JSON_EXAMPLE.faturamento.x}
            data={JSON_EXAMPLE.faturamento.data}
            title={"Relatorio de Faturamento"}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid sx={{ width: '100%' }}>
          <Grafico
            x={JSON_EXAMPLE.cadastros.x}
            data={JSON_EXAMPLE.cadastros.data}
            title={"Relatorio de Cadastros"}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid sx={{ width: '100%' }}>
          <Grafico
            x={JSON_EXAMPLE.assinaturas.x}
            data={JSON_EXAMPLE.assinaturas.data}
            title={"Relatorio de Assinaturas"}
          />
        </Grid>
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={1}>
        <Grid sx={{ width: '100%' }}>
          <Grafico
            x={JSON_EXAMPLE.agendamentos.x}
            data={JSON_EXAMPLE.agendamentos.data}
            title={"Relatorio de Agendamentos"}
          />
        </Grid>
      </Grid>
      
    </Box>
  );
}