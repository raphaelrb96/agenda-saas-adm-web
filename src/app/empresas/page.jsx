"use client"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FilterButton from '@/components/FilterButton';

import { Table, TableBody, TableCell, TableHead, TableRow, Typography, styled } from '@mui/material';
import TextInfo from '@/components/TextInfo';
import CardContainer from '@/components/CardContainer';


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

const TableCellDinamic = styled(TableCell)`
    ${props => props.theme.breakpoints.down("sm")} {
        display: none;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        display: flex;
    }
`;

const data = new Date(Date.now()).toLocaleDateString();

const EXAMPLE_DATA = [
  { id: 0, name: 'Empresa 1', date: data, plano: 'Grátis', vencimento: data, segmento: 'Odontologia' },
  { id: 1, name: 'Empresa 2', date: data, plano: 'Pago', vencimento: data, segmento: 'Fisioterapia' },
  { id: 2, name: 'Empresa 3', date: data, plano: 'Grátis', vencimento: data, segmento: 'Tatuagem' },
  { id: 3, name: 'Empresa 4', date: data, plano: 'Pago', vencimento: data, segmento: 'Estetica' },
  { id: 4, name: 'Empresa 5', date: data, plano: 'Pago', vencimento: data, segmento: 'Medicina' },
  { id: 5, name: 'Empresa 6', date: data, plano: 'Grátis', vencimento: data, segmento: 'Odontologia' },
  { id: 6, name: 'Empresa 7', date: data, plano: 'Grátis', vencimento: data, segmento: 'Psicologia' },
  { id: 7, name: 'Empresa 8', date: data, plano: 'Grátis', vencimento: data, segmento: 'Pilates' },
];

function TabelaEmpresas() {
  return (
    <CardContainer>
      <Table size="medium">
        <TableHead>
          <TableRow role='banner'>
            <TableCell>Nome</TableCell>
            <TableCell>Cadastro</TableCell>
            <TableCell>Plano</TableCell>
            <TableCell>Vence em</TableCell>
            <TableCellDinamic align="right">Segmento</TableCellDinamic>
          </TableRow>
        </TableHead>
        <TableBody>
          {EXAMPLE_DATA.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.plano}</TableCell>
              <TableCell>{row.vencimento}</TableCell>
              <TableCellDinamic align="right">{row.segmento}</TableCellDinamic>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </CardContainer>
  );
}

export default function Empresas() {



  const changeFilter = (filter) => {
    console.log(filter)
  };


  return (
    <Box>

      <FlexRow container columnSpacing={1}>
        <FlexGrid>
          <ContainerText>
            <TextInfo size={'24px'} color={'#3A9256'} bold sx={{ paddingLeft: 0 }}>
              Empresas
            </TextInfo>
          </ContainerText>
          <FilterButton onChange />
        </FlexGrid>
      </FlexRow>

      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12}>
          <TabelaEmpresas />
        </Grid>
      </Grid>



    </Box>
  );
}