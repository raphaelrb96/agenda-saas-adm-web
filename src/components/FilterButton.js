'use client'

import { ToggleButton, ToggleButtonGroup, Typography, styled } from "@mui/material";
import { useState } from "react";




export default function FilterButton({}) {
    const [alignment, setAlignment] = useState('24h');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="success"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="24h">24 h</ToggleButton>
            <ToggleButton value="07d">07 d</ToggleButton>
            <ToggleButton value="30d">30 d</ToggleButton>
        </ToggleButtonGroup>
    );
}