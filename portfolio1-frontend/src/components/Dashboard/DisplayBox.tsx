import { Paper } from '@mui/material';

type displayBoxProps = {
    children?: React.ReactNode;
};

const DisplayBox = (props: displayBoxProps ) => {

    return(
        <Paper
            elevation={0}
            sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '2px solid',
            borderColor: 'divider',
            height: '100%',
            p: 2,
            }}
        >
           {props.children}
        </Paper>

    )
}

export default DisplayBox;