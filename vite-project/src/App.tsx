import { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Container,
	CssBaseline,
	createTheme,
	ThemeProvider,
	Box,
	Button,
	TextField,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

// Define the type for the units
type Unit = "meters" | "kilometers" | "feet" | "inches";

function Settings() {
	const [darkMode, setDarkMode] = useState<boolean>(false);
	const [primaryColor, setPrimaryColor] = useState<string>("#1976d2");
	const [secondaryColor, setSecondaryColor] = useState<string>("#dc004e");
	const defaultUnit: Unit = "meters"; // Example usage of the Unit type

	// Example usage of defaultUnit
	console.log(`The default unit is ${defaultUnit}`);

	const theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
			primary: { main: primaryColor },
			secondary: { main: secondaryColor },
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container
				sx={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box sx={{ width: "100%", maxWidth: 600, textAlign: "center" }}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => setDarkMode(!darkMode)}
					>
						Toggle Dark Mode
					</Button>
					<TextField
						label="Primary Color"
						type="color"
						value={primaryColor}
						onChange={(e) => setPrimaryColor(e.target.value)}
						fullWidth
						margin="normal"
					/>
					<TextField
						label="Secondary Color"
						type="color"
						value={secondaryColor}
						onChange={(e) => setSecondaryColor(e.target.value)}
						fullWidth
						margin="normal"
					/>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

function App() {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	const handleThemeChange = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100vh",
						height: "100vh",
						width: "100vw",
						overflow: "hidden",
					}}
				>
					<AppBar position="static">
						<Toolbar>
							<Typography variant="h6" sx={{ flexGrow: 1 }}>
								App Title
							</Typography>
							<Button color="inherit" component={Link} to="/">
								Home
							</Button>
							<Button color="inherit" component={Link} to="/settings">
								Settings
							</Button>
							<IconButton
								edge="end"
								color="inherit"
								onClick={handleThemeChange}
							>
								{darkMode ? <Brightness7 /> : <Brightness4 />}
							</IconButton>
						</Toolbar>
					</AppBar>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</Box>
			</Router>
		</ThemeProvider>
	);
}

export default App;
