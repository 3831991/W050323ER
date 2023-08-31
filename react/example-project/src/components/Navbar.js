import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate, useResolvedPath } from 'react-router-dom';
import { GeneralContext } from '../App';

export const RoleTypes = {
    none: 0,
    user: 1,
    business: 2,
    admin: 3,
};

export const checkPermissions = (permissions, userRoleType) => {
    return permissions.includes(userRoleType);
}

const pages = [
    { route: '/about', title: 'אודות' },
    { route: '/login', title: 'התחבר', permissions: [RoleTypes.none] },
    { route: '/signup', title: 'הרשמה', permissions: [RoleTypes.none] },
    { route: '/favorite', title: 'מועדפים', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin] },
    { route: '/my-cards', title: 'הכרטיסים שלי', permissions: [RoleTypes.business, RoleTypes.admin] },
    { route: '/admin', title: 'ניהול משתמשים', permissions: [RoleTypes.admin] },
];

const settings = [
    { route: '/account', title: 'אזור אישי', permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin] },
];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { user, roleType, setUser, setRoleType, setLoader } = useContext(GeneralContext);
    const navigate = useNavigate();
    const path = useResolvedPath().pathname;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        setLoader(true);

        fetch(`https://api.shipap.co.il/clients/logout`, {
            credentials: 'include',
        })
        .then(() => {
            setUser();
            setRoleType(RoleTypes.none);
            setLoader(false);
            navigate('/');
        });

        handleCloseUserMenu();
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bcard
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* תפריט המבורגר */}
                            {pages.filter(p => !p.permissions || checkPermissions(p.permissions, roleType)).map((page) => (
                                <Link to={page.route} key={page.route} style={{ textDecoration: 'none', color: 'black' }}>
                                    <MenuItem key={page.route} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bcard
                    </Typography>
                    {/* תפריט עליון */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.filter(p => !p.permissions || checkPermissions(p.permissions, roleType)).map((page) => (
                            <Link to={page.route} key={page.route} style={{ textDecoration: 'none', color: 'white' }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', backgroundColor: page.route === path ? 'cornflowerblue' : '' }}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {
                        user &&
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <Link to={setting.route} key={setting.route} style={{ textDecoration: 'none', color: 'black' }}>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting.title}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                                <MenuItem onClick={logout}>
                                    <Typography textAlign="center">התנתק</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
