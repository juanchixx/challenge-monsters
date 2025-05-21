import styled from "styled-components";

export const Card = styled.div`
	border-radius: 35px;
	text-align: center;
	width: 150px;
    height: 150px;
	background-color: #FFF;

	.image {
		width: 90px;
		height: 90px;
        margin-top: 10px;
		object-fit: cover;
	}

	.name {
		font-weight: bold;
		color: #565656;
        margin: 0;
	}
`;
