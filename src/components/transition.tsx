import React from 'react';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';
import styled from 'styled-components';

//This variable will be responsible for our animation duration
const timeout = 250;

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!

const Transition = (props: { children: React.ReactNode; location: { pathname: string } }) => {
	//Destructuring props to avoid garbage this.props... in return statement

	return (
		//Using TransitionGroup and ReactTransition which are both
		//coming from  'react-transition-group' and are required for transitions to work
		<TransitionGroup>
			<ReactTransition
				//the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
				key={props.location.pathname}
				//duration of transition
				timeout={{
					enter: timeout,
					exit: timeout,
				}}>
				{//Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
				status => <AnimationPage status={status}>{props.children}</AnimationPage>}
			</ReactTransition>
		</TransitionGroup>
	);
};

// const getTransitionStyles = {
// 	entering: {
// 		transition: `all ${timeout}ms ease-in-out`,
// 		position: 'absolute',
// 		opacity: 0,
// 		transform: `scale(1.1)`,
// 	},
// 	entered: {
// 		transition: `all ${timeout}ms ease-in-out`,
// 		opacity: 1,
// 		transform: `scale(1)`,
// 	},
// 	exiting: {
// 		transition: `all ${timeout}ms ease-in-out`,
// 		opacity: 0,
// 		transform: `scale(0.9)`,
// 	},
// };

const AnimationPage = styled.div<{ status: string }>`
	transition: all ${timeout}ms ease-in-out;

	${props => {
		if (props.status == 'entering') {
			return `
				position: absolute;
				opacity: 0;
				transform: translateY(-10px);
			`;
		} else if (props.status == 'entered') {
			return `
				opacity: 1;
				transform: scale(1);
			`;
		} else if (props.status == 'exiting') {
			return `
				opacity: 0;
				transform: translateY(10px);
			`;
		}
	}}
`;

export default Transition;
