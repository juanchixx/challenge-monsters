import styled from "styled-components";

export const Card = styled.div`
	border-radius: 35px;
	text-align: center;
	width: 150px;
	height: 180px;
	background-color: #fff;

	.image {
		width: 90px;
		height: 90px;
		margin-top: 10px;
		object-fit: cover;
	}

	.name {
		font-weight: bold;
		color: #2e2e2e;
		margin: 0;
	}

	.description {
		color: #6c6c6c;
		margin: 0;
		font-size: 10px;
		padding-right: 10px;
		padding-left: 10px;
		height: 35px;
		align-content: center;
	}
`;
