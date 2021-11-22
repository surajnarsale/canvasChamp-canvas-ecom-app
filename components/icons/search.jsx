import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Search(props) {
	return (
		<Svg
			width={20}
			height={20}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM16.49 16.582l-2.615-2.707"
				stroke="#A2ADB5"
				strokeWidth={1.7}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default Search;
