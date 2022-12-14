import styled from 'styled-components';

export const DashboardContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	.horizontal-line {
		width: 100%;
		height: 2px;
		border-bottom: 1px solid var(--color-gray-2);
	}

	.user-profile {
		width: 100%;
		max-width: 1200px;
		padding: 0 18px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h2 {
			font-size: var(--font-size-lg);
			color: var(--color-gray-0);
			font-weight: 700;
		}
		.btn-add {
			font-size: 2rem;
			font-weight: 300;
		}
		span {
			font-size: var(--font-size-md);
			color: var(--color-gray-0);
			font-weight: 300;
		}
	}

	.user-tech {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 1rem;
		max-width: 1200px;
		padding: 0 18px;
		justify-content: center;
	}
	header {
		width: 100%;
		max-width: 1200px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 18px;

		.brand {
			color: var(--primary-color);
		}
	}
	ul {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 0.3rem;
		overflow-y: scroll;
		padding: 10px 18px;
		background-color: #212529;
		gap: 1rem;
	}
`;
