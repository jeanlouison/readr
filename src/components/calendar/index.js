import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { get_by_date } from '../../api/ade';
import useSwipe from '../../hooks/useSwipe';

import Card from './Card';

import '../../style/Calendar.css';

const Calendar = () => {

    const { group } = useParams();

    const now = new Date();
    let [ curDate, setCurDate ] = useState(
        `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        );
    // curDate = '2020-03-04'
    let [ courses, setCourses ] = useState([{}]);
    const page = useRef(null);

    useEffect(() => {
        get_by_date(group, curDate)
        .then(c => setCourses(c))
    }, [group, curDate]);

    useSwipe(page, {
        onSwipeLeft: event => {
            setCurDate('left');
        },
        onSwipeRight: event => {
            setCurDate('right');
        }
    }, 30);

    return <div ref={page}>
        <h1>{curDate}</h1>
        {courses.map(c => <Card key={c.start} course={c} />)}
    </div>
};

export default Calendar;