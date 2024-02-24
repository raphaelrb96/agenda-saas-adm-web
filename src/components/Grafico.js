'use client'

import { LineChart } from "@mui/x-charts";
import { useLayoutEffect } from "react";
import CardContainer from '@/components/CardContainer';
import TextInfo from './TextInfo';
import { Box, styled } from "@mui/material";


const ContainerText = styled(Box)`
    padding-left: 26px;
    margin-top: 26px;
`;

export default function Grafico({ width, title, x, y, data }) {




    return (
        <CardContainer>

            <ContainerText>
                <TextInfo size={'22px'} sx={{ paddingLeft: 10 }}>
                    {title}
                </TextInfo>
            </ContainerText>


            <LineChart
                xAxis={x ? [{ data: x, min: 1, max: 7, scaleType: 'band',}] : undefined}
                yAxis={y ? [{ data: y }] : undefined}
                series={[
                    {
                        data: data,
                        area: false,
                        color: "#3A9256"
                    },
                ]}
                height={300}
            />
        </CardContainer>

    );
}