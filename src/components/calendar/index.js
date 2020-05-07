import React, { useState, useEffect, useParams } from 'react';

import { get_today, get_from_date } from '../../api/ade'

import '../../Calendar.css'
const Calendar = () => {

    const { group } = useParams();

    const now = new Date();
    let [ curDate, setCurDate ] = useState(
        `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        );
    let [ courses, setCourses ] = useState({});

    useEffect(() => {
        get_today(group)
        .then(c => setCourses(c))
    }, [])
};

export default Calendar;