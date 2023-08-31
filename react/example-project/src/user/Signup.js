import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../App';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

const defaultTheme = createTheme();

export default function Signup() {
    const { setLoader } = useContext(GeneralContext);
    const navigate = useNavigate();

    const structure = [
        { name: 'firstName', type: 'text', label: 'שם פרטי', required: true, block: false },
        { name: 'middleName', type: 'text', label: 'שם אמצעי', required: true, block: false },
        { name: 'lastName', type: 'text', label: 'שם משפחה', required: true, block: false },
        { name: 'phone', type: 'tel', label: 'טלפון', required: true, block: false },
        { name: 'email', type: 'email', label: 'אימייל', required: true, block: false },
        { name: 'password', type: 'password', label: 'סיסמה', required: true, block: false },
        { name: 'imgUrl', type: 'text', label: 'קישור לתמונה', required: true, block: true },
        { name: 'imgAlt', type: 'text', label: 'תיאור תמונה', required: true, block: false },
        { name: 'state', type: 'text', label: 'מחוז', required: true, block: false },
        { name: 'country', type: 'text', label: 'מדינה', required: true, block: false },
        { name: 'city', type: 'text', label: 'עיר', required: true, block: false },
        { name: 'street', type: 'text', label: 'רחוב', required: true, block: false },
        { name: 'houseNumber', type: 'number', label: 'מספר בית', required: true, block: false },
        { name: 'zip', type: 'number', label: 'מיקוד', required: true, block: false },
        { name: 'business', type: 'boolean', label: 'לקוח עסקי', required: true, block: false },
    ]

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const obj = {};
        const elements = ev.target.elements;

        structure.forEach(s => {
            if (s.type === 'boolean') {
                obj[s.name] = elements[s.name].value === 'on';
            } else {
                obj[s.name] = elements[s.name].value;
            }
        });

        setLoader(true);

        fetch(`https://api.shipap.co.il/clients/signup?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text().then(x => {
                        throw new Error(x);
                    });
                }
            })
            .then(() => {
                navigate('/login');
            })
            .catch(err => {
                alert(err.message);
            })
            .finally(() => setLoader(false));
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        הרשמה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            {
                                structure.map(s =>
                                    <Grid key={s.name} item xs={12} sm={s.block ? 12 : 6}>
                                        {
                                            s.type === 'boolean' ?
                                                <FormControlLabel
                                                    name={s.name}
                                                    control={<Switch color="primary" />}
                                                    label={s.label}
                                                    labelPlacement="start"
                                                /> :
                                                <TextField
                                                    name={s.name}
                                                    required={s.required}
                                                    fullWidth
                                                    id={s.name}
                                                    label={s.label}
                                                    type={s.type}
                                                />
                                        }
                                    </Grid>
                                )
                            }
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            הרשם
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link to="/login">
                                    להתחברות לחץ כאן
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}