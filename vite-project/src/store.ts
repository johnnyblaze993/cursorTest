import { create } from "zustand";

type Unit = "meters" | "kilometers" | "feet" | "inches";

interface AppState {
	darkMode: boolean;
	primaryColor: string;
	secondaryColor: string;
	defaultUnit: Unit;
	colorScheme: "scheme1" | "scheme2" | "scheme3";
	toggleDarkMode: () => void;
	setPrimaryColor: (color: string) => void;
	setSecondaryColor: (color: string) => void;
	setColorScheme: (scheme: "scheme1" | "scheme2" | "scheme3") => void;
}

export const useAppStore = create<AppState>((set) => ({
	darkMode: false,
	primaryColor: "#1976d2",
	secondaryColor: "#dc004e",
	defaultUnit: "meters",
	colorScheme: "scheme1",
	toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
	setPrimaryColor: (color) => set({ primaryColor: color }),
	setSecondaryColor: (color) => set({ secondaryColor: color }),
	setColorScheme: (scheme) => set({ colorScheme: scheme }),
}));
