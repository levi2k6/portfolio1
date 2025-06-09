import { useState } from 'react';
import { Box, Paper } from '@mui/material';
import OptionsBox from '../components/Dashboard/OptionsBox.tsx';
import PeopleBox from '../components/Dashboard/PeopleBox.tsx'
import TableBox from '../components/TableBox';
import DisplayBox from '../components/Dashboard/DisplayBox';


const Dashboard = () => {

    const [selectedOption, setSelectedOption] = useState<string>("view");

    return (
        <Box sx={{ display: 'flex', height: '80vh', gap: 3 }}>
            <OptionsBox 
            setSelectedOption={setSelectedOption}
            />

            <DisplayBox>   
                    {
                        selectedOption === "view" ? (
                            <PeopleBox/>
                        ) : selectedOption === "create" ? (
                            <h1> Hello </h1>
                        ) : selectedOption === "settings" ? (
                            <h1> Else </h1>
                        ) : null 
                    }
                    
            </DisplayBox>
        </Box>
    );
};
export default Dashboard;