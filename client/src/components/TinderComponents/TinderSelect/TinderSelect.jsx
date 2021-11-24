import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getAllBreed, getAllSex } from "../../redux/ac/tinderAc";
import { useDispatch, useSelector } from "react-redux";

export default function TinderSelect() {
  const { breed, sex } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSex());
  }, []);

  useEffect(() => {
    dispatch(getAllBreed());
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Порода</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="breed"
          label="Пол"
          // onChange={handleChange}
        >
          {breed?.length &&
            breed?.map((el) => (
              <MenuItem key={el.id} value={el.breed_title}>
                {el.breed_title}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Пол</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="sex"
          label="Пол"
          // onChange={handleChange}
        >
          {sex?.length &&
            sex?.map((el) => (
              <MenuItem key={el.id} value={el.sex}>
                {el.sex}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
