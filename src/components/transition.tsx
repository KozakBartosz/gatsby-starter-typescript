import React from 'react';
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';

//This variable will be responsible for our animation duration
const timeout = 300;

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!

const Transition = (props: { children: React.ReactNode; location: { pathname: string, state?: {animation?: string} } }) => {
	//Destructuring props to avoid garbage this.props... in return statement
	// console.log("props.location",props.location);
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
				status => <AnimationPage status={status} animation={props.location.state?props.location.state.animation:""} className={"animationPage--"+status}>{props.children}</AnimationPage>}
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

const AnimationPage = styled.div<{ status: string, animation?: string }>`
	transition: transform ${timeout}ms ease, opacity ${timeout}ms ease;
	will-change: transform, opacity;
	transform-origin: 50% 50vw;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;

	${props => {
		if (props.status == 'entering') {
			return css`
				position: absolute;
				opacity: 0;
				${()=>props.animation == "zoom" ? `transform: translateY(0);`:`transform: translateY(100px);`}
			`;
			
		} else if (props.status == 'entered') {
			return css`
				opacity: 1;
				transform: scale(1);
				transition: transform ${timeout*3}ms cubic-bezier(.15,.76,.12,1), opacity ${timeout*3}ms ease;
			`;
		} else if (props.status == 'exiting') {
			return css`
				opacity: 0;
				/* transform: translateX(-120px); */
				${()=>props.animation == "zoom" ? `transform: translateY(0);`:`transform: translateY(-30px);`}
			`;
		}
	}}
`;

export default Transition;
