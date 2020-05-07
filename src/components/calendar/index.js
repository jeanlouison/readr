import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { get_today, get_by_date } from '../../api/ade';

import Card from './Card';

import '../../style/Calendar.css';

const Calendar = () => {

    const { group } = useParams();

    const now = new Date();
    let [ curDate, setCurDate ] = useState(
        `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        );
    curDate = '2020-03-04'
    let [ courses, setCourses ] = useState([{}]);

    useEffect(() => {
        get_by_date(group, curDate)
        .then(c => setCourses(c))
    }, [])

    return <>
        <h1>{curDate}</h1>
        {courses.map(c => <Card id={c.start} course={c} />)}
    </>
};

export default Calendar;