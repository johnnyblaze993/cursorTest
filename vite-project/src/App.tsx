import { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Container,
	Select,
	MenuItem,
	CssBaseline,
	createTheme,
	ThemeProvider,
	Box,
	TextField,
	Button,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

// Define the type for the units
type Unit = "meters" | "kilometers" | "feet" | "inches";

const units = {
	meters: 1,
	kilometers: 0.001,
	feet: 3.28084,
	inches: 39.3701,
};

function App() {
	const [inputValue, setInputValue] = useState<number>(0);
	const [inputUnit, setInputUnit] = useState<Unit>("meters");
	const [outputUnit, setOutputUnit] = useState<Unit>("meters");
	const [outputValue, setOutputValue] = useState<number>(0);
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
		},
	});

	const handleConvert = () => {
		const valueInMeters = inputValue / units[inputUnit];
		const convertedValue = valueInMeters * units[outputUnit];
		setOutputValue(convertedValue);
	};

	const handleThemeChange = () => {
		setDarkMode(!darkMode);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
					height: "100vh",
					width: "100vw", // Ensure it takes the full width
					overflow: "hidden", // Prevent overflow
				}}
			>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" sx={{ flexGrow: 1 }}>
							App Title
						</Typography>
						<IconButton edge="end" color="inherit" onClick={handleThemeChange}>
							{darkMode ? <Brightness7 /> : <Brightness4 />}
						</IconButton>
					</Toolbar>
				</AppBar>
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
						<TextField
							label="Input Value"
							type="number"
							value={inputValue}
							onChange={(e) => setInputValue(Number(e.target.value))}
							fullWidth
							margin="normal"
						/>
						<Select
							value={inputUnit}
							onChange={(e) => setInputUnit(e.target.value as Unit)}
							fullWidth
							margin="dense" // Changed from "normal" to "dense"
						>
							{Object.keys(units).map((unit) => (
								<MenuItem key={unit} value={unit}>
									{unit}
								</MenuItem>
							))}
						</Select>
						<Select
							value={outputUnit}
							onChange={(e) => setOutputUnit(e.target.value as Unit)}
							fullWidth
							margin="dense"
						>
							{Object.keys(units).map((unit) => (
								<MenuItem key={unit} value={unit}>
									{unit}
								</MenuItem>
							))}
						</Select>
						<Button
							variant="contained"
							color="primary"
							onClick={handleConvert}
							sx={{ mt: 2 }}
						>
							Convert
						</Button>
						<Typography variant="h5" sx={{ mt: 2 }}>
							Output Value: {outputValue}
						</Typography>
					</Box>
				</Container>
			</Box>
		</ThemeProvider>
	);
}

export default App;
