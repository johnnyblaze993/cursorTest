import { useState } from "react";
import {
	Container,
	Box,
	TextField,
	Select,
	MenuItem,
	Button,
	Typography,
} from "@mui/material";

type Unit = "meters" | "kilometers" | "feet" | "inches";

const units = {
	meters: 1,
	kilometers: 0.001,
	feet: 3.28084,
	inches: 39.3701,
};

function Home() {
	const [inputValue, setInputValue] = useState<number>(0);
	const [inputUnit, setInputUnit] = useState<Unit>("meters");
	const [outputUnit, setOutputUnit] = useState<Unit>("meters");
	const [outputValue, setOutputValue] = useState<number>(0);

	const handleConvert = () => {
		const valueInMeters = inputValue / units[inputUnit];
		const convertedValue = valueInMeters * units[outputUnit];
		setOutputValue(convertedValue);
	};

	return (
		<Container
			sx={{
				flexGrow: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Box
				sx={{
					width: "100%",
					maxWidth: 600,
					textAlign: "center",
				}}
			>
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
					margin="dense"
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
				<Typography variant="h6" sx={{ mt: 2 }}>
					Output Value: {outputValue}
				</Typography>
			</Box>
		</Container>
	);
}

export default Home;
