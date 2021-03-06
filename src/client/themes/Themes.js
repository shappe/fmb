export const themes = {
	standardSpace: '0.5rem',
	standardRadius: '2px',
	standardTextColor: '#FAF1F2',
	mediumSpace: '1rem',
	largeSpace: '2rem',
	extraLargeSpace: '3rem',
	primaryButton: {
		background: 'linear-gradient(45deg, #2cdd88 0%, #7db9e8 100%)',
		transition: 'box-shadow 0.1s ease-out',
		':hover': {
			cursor: 'pointer',
      background: 'linear-gradient(45deg, #1ccd78 0%, #6da9d8 100%)',
      color: 'rgb(240, 231, 232)',
			boxShadow: 'inset 0 0 4px rgba(255, 255, 255, 0.8)',
		},
		':active': {
			boxShadow: 'inset 0 0 4px #363D42',
		}
	},
	secondaryButton: {
 		background: 'linear-gradient(45deg, #db1515 0%,#d61987 100%)',
 		':hover': {
			boxShadow: 'inset 0 0 4px rgba(255, 255, 255, 0.5)',
		},
		':active': {
			boxShadow: 'inset 0 0 4px #363D42',
		}
 	}
}