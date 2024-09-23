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
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";
import { useAppStore } from "./store";

function App() {
	const darkMode = useAppStore((state) => state.darkMode);
	const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);
	const primaryColor = useAppStore((state) => state.primaryColor);
	const secondaryColor = useAppStore((state) => state.secondaryColor);

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
			<Router>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						height: "100vh",
						width: "100vw",
					}}
				>
					<AppBar position="static">
						<Toolbar>
							<Typography variant="h6" sx={{ flexGrow: 1 }}>
								My App
							</Typography>
							<Button color="inherit" component={Link} to="/">
								Home
							</Button>
							<Button color="inherit" component={Link} to="/settings">
								Settings
							</Button>
							<IconButton color="inherit" onClick={toggleDarkMode}>
								{darkMode ? <Brightness7 /> : <Brightness4 />}
							</IconButton>
						</Toolbar>
					</AppBar>
					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Container
							sx={{
								flexGrow: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								overflow: "auto",
								height: "100%",
								width: "100%",
							}}
						>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/settings" element={<Settings />} />
							</Routes>
						</Container>
					</Box>
				</Box>
			</Router>
		</ThemeProvider>
	);
}

export default App;
