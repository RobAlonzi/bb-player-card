import React from "react";
import { components } from "react-select";
import Select from "react-select/async";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

import { searchForPlayer } from "@/data";
import { debounce } from "@/util";

const selectStyle = {
  control: (provided) => ({
    ...provided,
    background: "inherit",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#FFF",
  }),
  input: (provided) => ({
    ...provided,
    color: "#FFF",
  }),
  option: (provided) => ({
    ...provided,
    color: "#000",
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <SearchIcon />
    </components.DropdownIndicator>
  );
};

function MainSearch({ onPlayerSearch }) {
  async function loadOptions(input, callback) {
    const result = await searchForPlayer(input);
    callback(result);
  }

  return (
    <Box width={250}>
      <Select
        components={{ DropdownIndicator }}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
        loadOptions={debounce(loadOptions)}
        name="main-search"
        onChange={onPlayerSearch}
        placeholder="Search player"
        styles={selectStyle}
        value={null}
      />
    </Box>
  );
}

export default MainSearch;
