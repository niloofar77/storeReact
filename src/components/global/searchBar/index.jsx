import React, { useState } from 'react';
import { OutlinedInput, InputAdornment, IconButton,Box, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
 

  const searchBoxHandler = (event) => {
    let text = event.target.value;
    setSearchQuery(text);
    if(text.length === 0){
      onSearch(text, searchType);
    }
  }

  const searchTypeHandler = (event) => {
    setSearchType(event.target.value);
    
  }

  const searchSubmitHandler = () => {
    onSearch(searchQuery, searchType);
  }
  



  return (
    <>
    <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column',m:2,flexGrow:1 }}>
      <OutlinedInput
        id="search"
        placeholder="serach for product or brands..."
        fullWidth
        value={searchQuery}
        onChange={searchBoxHandler}
        startAdornment={
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        sx={{ backgroundColor: "white", ml: 1,width:"600px"}}
      />

 
   
    </Box>
    </>
  );
}


