const transitionDelay = 300;

exports.shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
	if (location.action === 'PUSH') {
		window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
	} else {
		const savedPosition = getSavedScrollPosition(location);
		window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), transitionDelay+10);
	}
	return false;
};
