import React from 'react';
import targetIcon from '../../resources/images/targetIcon.svg';

const GPSIcon = ({height, width, color}) => {
	return (
		<img
			src={targetIcon}
			alt='GPS'
			heigth={height}
			width={width}
		/>
	);
}

export default GPSIcon;