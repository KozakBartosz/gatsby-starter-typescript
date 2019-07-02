import React from 'react';

export default (props: { tags: string }) => {
	return <div dangerouslySetInnerHTML={{ __html: props.tags }} />;
};
