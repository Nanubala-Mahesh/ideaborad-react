import React from 'react';

const Idea = ({idea}) =>
  <div className="title key={idea.id}">
    {console.log(idea)}
    <h4> { idea.title } </h4>
    <p> { idea.body} </p>
  </div>


  export default Idea;
