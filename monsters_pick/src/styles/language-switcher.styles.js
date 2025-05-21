import styled from "styled-components";

export const BoxSwitcher = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;

	select {
		padding: 6px 12px;
		border-radius: 4px;
		border: 1px solid #ccc;
		background-color: white;
		font-weight: bold;
		cursor: pointer;
        color: #3e3e3e;
        margin-left: 10px;
	}

	select:hover {
		border-color: #888;
	}
`;
