import React from 'react';

import '../../style/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ course }) => {
  
    return <span className="card text-truncate">
        <h3>{course.name}</h3>
        <h4>{course.classroom}</h4>
    </span>
};

export default Card;