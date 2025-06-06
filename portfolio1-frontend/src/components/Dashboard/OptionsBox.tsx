import { Paper, Button, Typography } from '@mui/material';

type OptionBoxProps={
    setSelectedOption: (option: string)=>void;
}

const OptionsBox = (props: OptionBoxProps) => {

    const {setSelectedOption} = props;

    return(
        <Paper
            elevation={0}
            sx={{
            width: 280,
            minWidth: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '2px solid',
            borderColor: 'divider',
            height: '100%',
            }}
        >
            <Typography 
            variant="h5" 
            sx={{
                height: "4rem", 
                width: "100%",
                // border: "1px solid black" ,
                display: "flex",
                justifyContent: "center", 
                alignItems: "center"
            }}> Options </Typography>
            <Button sx={{ width: "100%"}} onClick={()=>setSelectedOption("view")} > VIEW </Button>
            <Button sx={{ width: "100%"}} onClick={()=>setSelectedOption("create")} > CREATE </Button>
            <Button sx={{ width: "100%"}} onClick={()=>setSelectedOption("settings")} > SETTINGS </Button>

        </Paper>
    )
};

export default OptionsBox;
