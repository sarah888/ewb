import React from 'react';

const Members = ({members,deleteMember}) => {

    const memberList = members.map((cover) => {
        return (
            <div className = 'cover loop' key = {cover.id} >
                <h1>{cover.name}</h1>
                <h2>{cover.snumber}</h2>
                <p>{cover.position}</p>
                <button onClick = {() => {deleteMember(cover.id)}}>Delete</button>
            </div>
        );
    })

    return (
        <div className = 'cover outputted list'>
            {memberList}
        </div>
    );
    
}


export default Members;