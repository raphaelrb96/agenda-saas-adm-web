'use client'
import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { Avatar, Box, Container, Grid, Typography, styled } from "@mui/material";

import StarIcon from '@mui/icons-material/Star';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';

import CardContainer from './CardContainer';
import TextInfo from './TextInfo';



const IconeFaturamento = styled(PaidOutlinedIcon)`
    padding-right: 4px;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 22px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: 30px;
    }
`;

const IconeCadastro = styled(AssignmentIndOutlinedIcon)`
    padding-right: 4px;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 22px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: 30px;
    }
`;

const IconeAssinatura = styled(CurrencyExchangeIcon)`
    padding-right: 4px;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 22px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: 30px;
    }
`;

const IconeAgendamentos = styled(EventIcon)`
    padding-right: 4px;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 22px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: 30px;
    }
`;

const IconeRenovacoes = styled(CreditScoreOutlinedIcon)`
    padding-right: 4px;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 22px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: 30px;
    }
`;

const IconeExpiradas = styled(MoneyOffCsredOutlinedIcon)`
    padding-right: 4px;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 22px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: 30px;
    }
`;

const IconeDefault = styled(StarIcon)`
    padding-right: 4px;
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 22px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: 30px;
    }
`;


const FlexRow = styled(CardContent)`
    display: flex;
    flex-direction: row;
    align-content: space-between;
    align-items: center;
    justify-content: space-between;
`;

const FlexColl = styled(Box)`
    display: flex;
    flex-direction: column;
`;

const TitleInfo = styled(Typography)`
    ${props => props.theme.breakpoints.down("sm")} {
        font-size: 24px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        font-size: 30px;
    }
    font-family: Roboto, sans-serif;
    font-weight: 700;
    letter-spacing: -0.4px;
    text-align: center;
    margin-top: 1px;
    color: rgba(0, 0, 0, 1);
    width: 100%;
`;

export default function MediaCard({ heading, text, button, buttonExtra, icon }) {

  const getIcon = (string) => {
    switch (string) {
      case 'Faturamento':
        return <IconeFaturamento />;
      case 'Cadastros':
        return <IconeCadastro />;
      case 'Assinaturas':
        return <IconeAssinatura />;
      case 'Agendamentos':
        return <IconeAgendamentos />;
      case 'Renovações':
        return <IconeRenovacoes />;
      case 'Expiradas':
        return <IconeExpiradas />;
      default:
        return <IconeDefault />;
    }
  };

  return (
    <CardContainer>

      <FlexColl>


        <FlexRow component="div">
          {getIcon(text)}
          <Box sx={{ paddingLeft: '6px' }} />
          <TextInfo>
            {text ? text : 'Empresas'}
          </TextInfo>
        </FlexRow>

        <TitleInfo>
          {heading ? heading : '000'}
        </TitleInfo>

      </FlexColl>
      <CardActions>
        {button ? <Button size="small">{button}</Button> : null}
        {buttonExtra ? <Button size="small">{buttonExtra}</Button> : null}
      </CardActions>
    </CardContainer>
  );
}