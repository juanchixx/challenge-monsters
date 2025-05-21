import styled from "styled-components";

export const ButtonMonster = styled.button`
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 1em 1.2em;
    margin: 10px;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #e46060;
	cursor: pointer;
	transition: border-color 0.25s;

	&:hover {
		background-color: #e53434;
	}
	&:focus,
	&:focus-visible {
		outline: 1px auto -webkit-focus-ring-color;
	}
`;

