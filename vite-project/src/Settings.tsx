import {
	Typography,
	Container,
	CssBaseline,
	createTheme,
	ThemeProvider,
	Box,
	Button,
	TextField,
} from "@mui/material";
import { useAppStore } from "./store";

function Settings() {
	const darkMode = useAppStore((state) => state.darkMode);
	const primaryColor = useAppStore((state) => state.primaryColor);
	const secondaryColor = useAppStore((state) => state.secondaryColor);
	const toggleDarkMode = useAppStore((state) => state.toggleDarkMode);
	const setPrimaryColor = useAppStore((state) => state.setPrimaryColor);
	const setSecondaryColor = useAppStore((state) => state.setSecondaryColor);
	const setColorScheme = useAppStore((state) => state.setColorScheme);
	const colorScheme = useAppStore((state) => state.colorScheme);

	const colorSchemes = {
		scheme1: { primary: "#1976d2", secondary: "#dc004e" },
		scheme2: { primary: "#388e3c", secondary: "#fbc02d" },
		scheme3: { primary: "#8e24aa", secondary: "#ff7043" },
	};

	const handleColorSchemeChange = (
		scheme: "scheme1" | "scheme2" | "scheme3"
	) => {
		setColorScheme(scheme);
		setPrimaryColor(colorSchemes[scheme].primary);
		setSecondaryColor(colorSchemes[scheme].secondary);
	};

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
					<Button variant="contained" color="primary" onClick={toggleDarkMode}>
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
					<Box sx={{ mt: 2 }}>
						<Typography variant="h6">Select Color Scheme</Typography>
						<Button
							variant="contained"
							color={colorScheme === "scheme1" ? "primary" : "inherit"}
							onClick={() => handleColorSchemeChange("scheme1")}
							sx={{ m: 1 }}
						>
							Scheme 1
						</Button>
						<Button
							variant="contained"
							color={colorScheme === "scheme2" ? "primary" : "inherit"}
							onClick={() => handleColorSchemeChange("scheme2")}
							sx={{ m: 1 }}
						>
							Scheme 2
						</Button>
						<Button
							variant="contained"
							color={colorScheme === "scheme3" ? "primary" : "inherit"}
							onClick={() => handleColorSchemeChange("scheme3")}
							sx={{ m: 1 }}
						>
							Scheme 3
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Settings;
