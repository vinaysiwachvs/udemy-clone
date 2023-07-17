import { useHistory } from "react-router-dom";
import React, { useCallback } from "react";

const useNavigation = () => {
	const history = useHistory();

	const pushRoute = useCallback(
		(path) => {
			history.push(path);
		},
		[history],
	);

	const replaceRoute = useCallback(
		(path) => {
			history.replace(path);
		},
		[history],
	);

	const goBack = useCallback(() => {
		history.goBack();
	}, [history]);

	return { push: pushRoute, replace: replaceRoute, goBack };
};

const Search = () => {
	const navigation = useNavigation();

	const handleButtonClick = () => {
		navigation.push("/search");
	};

	return (
		<div>
			<button onClick={handleButtonClick}>Go to Another Route</button>
		</div>
	);
};
