import {useState} from 'react'
import { DateRange } from 'react-date-range';
import React from 'react'
import { addDays } from 'date-fns';
import format from 'date-fns/format';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../App.css';

function DatePicker() {

    const [range,setRange] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(),7),
          key: 'selection'
        }
      ])
      const [open,setOpen]=useState(false)

      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };
      
  return (
    <>

  <Container sx={{display:'flex',padding:'20px'}}> 
   <Container  sx={{display:'flex',flex:'0.8'}}>
     
      <Box>
        <TextField
           value={`${format(range[0].startDate,"dd MMMM yyy")}`}
          id="outlined-password-input"
          label=<DateRangeIcon/>
          // type="password"
          autoComplete="current-password"
          onClick={ () => setOpen(open => !open) }
          sx={{width:'100%'}}
        />
        </Box>
        <Box>

        <TextField
           value={`8 days`}
          id="outlined-password-input"
          label=<AccessTimeIcon/>
          // type="password"
          autoComplete="current-password"
        />
        </Box>

        <Box>
        <TextField
           value={`${format(range[0].endDate,"dd MMMM yyy")}`}
          id="outlined-password-input"
          label=<DateRangeIcon/>
          // type="password"
          autoComplete="current-password"
        />
        </Box>
      </Container>
      <Container sx={{flex:'0.2'}}>
      <Box>
      <FormControl sx={{width:'100%'}}>
        <InputLabel >Rooms</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>One Room</MenuItem>
          <MenuItem value={20}>Two Room</MenuItem>
          <MenuItem value={30}>Three Room</MenuItem>
        </Select>
      </FormControl>
        </Box>
      </Container>
      </Container>
       { 
        open && <DateRange
          editableDateInputs={true}
          onChange={item => setRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction="horizontal"
          className='daterange'
          
        />
       }
       </>
  )
}

export default DatePicker
