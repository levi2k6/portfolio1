import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {
  toggleTheme?: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const theme = useTheme();

  return (
    <AppBar position="sticky" elevation={0} sx={{ 
      backgroundColor: 'background.paper',
      borderBottom: '1px solid',
      borderColor: 'divider'
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo/Brand */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 700,
              letterSpacing: '0.5px',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            PORTFOLIO
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/dashboard"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              Dashboard
            </Button>
            <Button
              component={RouterLink}
              to="/projects"
              color="inherit"
              sx={{ color: 'text.primary' }}
            >
              Projects
            </Button>
            
            {/* Theme Toggle */}
            {toggleTheme && (
              <IconButton 
                onClick={toggleTheme} 
                color="inherit"
                sx={{ ml: 1 }}
              >
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 