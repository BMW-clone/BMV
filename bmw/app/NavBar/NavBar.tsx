'use client'
import React, { useState, useEffect, FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import axios from 'axios';
//import { useRouter } from 'next/navigation';
import Cookies from "universal-cookie";
import jwtDecode from 'jwt-decode';
import './NavBar.css'
import { useRouter } from 'next/navigation';


const pages = [
    { label: 'Home', link: '/Home' },
    { label: 'Used Cars', link: '/UsedCars' },
    { label: 'New Cars', link: '/NewCars' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const NavBar: FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleSearch = async (keyword: string) => {
        setSearchKeyword(keyword);
        const router= useRouter();
        if (keyword.trim().length >= 2) {
            try {
                const response = await axios.get(
                    `http://localhost:5000/newcars/search?keyword=${encodeURIComponent(keyword)}`
                );

                console.log(response.data);

               router.push(`/NewCars/search?keyword=${encodeURIComponent(keyword)}`);
                setSearchKeyword('');
            } catch (error) {
                if (error) {
                    router.push(`/NewCars/search?keyword=${encodeURIComponent(keyword)}`);
                }
                console.error('Error during search:', error);
            }
        }
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = event.target.value;
        handleSearch(keyword);
    };
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    //!token interface
    interface Token {
        username: string,
        password: string,
        role: string,
        profilepic: string
        exp: number,
    }
    //!token 
    const [token, setToken] = useState<Token>()
    const tokenGrabber = () => {
        const cookies = new Cookies()
        setToken(jwtDecode(cookies.get("jwt-token")))
    }
    useEffect(() => {
        tokenGrabber()
    }, [])

    //!logout 
    const logout2 = (settings: string) => {
        if (settings === "Logout") {
            const cookies = new Cookies()
            cookies.remove("jwt-token")
            router.push("/")
        } else return

    }
    const navProfile = (setting: string) => {
        if (setting === "Profile" && token?.role === "Client") {
            router.push("/UserProfile")
        } else if (setting === "Profile" && token?.role === "Seller") {
            router.push("/SellerProfile")
        } else return
    }

    const adminDash = (setting: string) => {
        if (setting === "Dashboard") {
            router.push("/Dashboard")
        }
        else return
    }


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/Home"
                        sx={{
                            // ...existing styles
                        }}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/600px-BMW_logo_%28gray%29.svg.png"
                            alt="Logo"
                            style={{
                                height: '51px',
                                marginTop: '8px',
                                marginRight: '8px',
                                width: '51px',
                            }}
                        />
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
                            Menu
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

                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
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
                        LOGO
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchKeyword}
                            onChange={handleSearchInputChange}

                        />
                    </Search>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.label}
                                component={Link}
                                href={page.link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <b>{page.label}</b>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={token?.profilepic} />
                            </IconButton>
                        </Tooltip>
                        {token?.role === "admin" && <Menu
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
                            {['Dashboard', 'Logout'].map((setting) => (
                                <MenuItem key={setting} onClick={() => { handleCloseUserMenu(); logout2(setting); adminDash(setting); }}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>}
                        {(token?.role === "Seller" || token?.role === "Client") && <Menu
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
                            {['Profile', 'Logout'].map((setting) => (
                                <MenuItem key={setting} onClick={() => { handleCloseUserMenu(); logout2(setting); navProfile(setting); }}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
