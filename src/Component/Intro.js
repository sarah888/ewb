import React from 'react';

const Intro = ({titles}) => {
    const titleList = titles.map((cover) => {
        return (
            <div className = 'cover loop' key = {cover.id} >
                <h1>{cover.title}</h1>
            </div>
        );
    })

    return (
        <div className = 'cover outputted list'>
            {titleList}
        </div>
    );
    
}


export default Intro;