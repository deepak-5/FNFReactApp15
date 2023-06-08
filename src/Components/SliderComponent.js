import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";


const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps
}) => {
  return (
    <Stack my={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        value={value}
        onChange={onChange}
        sx={{ width: 300, height: 30 }}
        step={steps}
      />
      
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography >
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      
    </Stack>
  );
};
export default SliderComponent;