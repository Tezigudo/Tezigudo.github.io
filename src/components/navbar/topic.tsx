import React from 'react';

function Topic(props: {topicName: string}){
    const {topicName} = props;

    return (
        <a className="hover:text-sky-500" href={`#${topicName.toLowerCase()}`}>
        {topicName}
    </a>
    );
}

export default Topic;