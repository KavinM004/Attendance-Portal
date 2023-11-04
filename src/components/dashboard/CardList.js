import React from 'react';
import { faBook, faBookDead, faBookReader, faCalendar, faClipboardList, faComments, faDollar, faRupee, faUser, faUserAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const cardData = [
        {
            title: "Check-in",
            count: 444,
            colors: "success",
            icon: faBook
        },
        {
            title: "Check-out",
            count: 230,
            colors: "warning",
            icon: faBookReader
        },
        {
            title: "Female",
            count: 340,
            colors: "info",
            icon: faUsers,

        },
        {
            title: "Male",
            count: "104",
            colors: "primary",
            icon: faUserPlus
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt) => <Card data={dt} />)}
        </div>
    );
}
