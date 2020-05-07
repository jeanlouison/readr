import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { get_today, get_from_date } from '../../api/ade';

import '../../style/Calendar.css'

const Calendar = () => {

    const { group } = useParams();

    const now = new Date();
    let [ curDate, setCurDate ] = useState(
        `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        );
    curDate = '2019-03-01'
    let [ courses, setCourses ] = useState({});

    useEffect(() => {
        get_today(group)
        .then(c => setCourses(c))
    }, [])

    return <>
        <h1>{curDate}</h1>
        <h2>{JSON.stringify(courses)}</h2>
    </>
};

export default Calendar;