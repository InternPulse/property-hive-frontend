/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				neutrals: {
					25: '#FCFDFD',
					50: '#F5F6F6',
					300: '#ACB4B3',
					400: '#828E8E',
					700: '#4B5353',
					950: '#242828'
				},
				primary: {
					25: '#FAFDFE',
					100: '#D6F1EF',
					500: '#389294',
					800: '#224A4D',
					hover: '#2B7376',
					pressed: '#255A5D',
					disabled: '#AEE1DE'
				},
				secondary: {
					50: '#ECFFFF',
					200: '#ECFFFF',
					600: '#049AB6',
					800: '#145265',
					hover: '#01C1D9',
					pressed: '#0B7B93',
					disabled: '#CED3D3'
				},
				accent: {
					50: '#FFFFEA',
					'50Inverse': '#FFFFEA',
					600: '#E29400',
					800: '#985108'
				},
				error: {
					50: '#FFF2F1',
					500: '#EE454F',
					hover: '#DB2438',
					pressed: '#B8182D',
					disabled: '#FAA7A8'
				}
			}
		}
	},
	plugins: []
};
