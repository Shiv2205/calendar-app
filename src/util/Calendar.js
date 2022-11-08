import dayjs from "dayjs";

//let todayIndex = 0;

const generateDate = (month = dayjs().month(), year = dayjs().year()) => {// Value of parameters default to current month and year using dayjs function.
    
    let startOfMonth = dayjs().year(year).month(month).startOf('month');
    let endOfMonth = dayjs().year(year).month(month).endOf('month');
    

    const dates = [];

    //generate prefix dates
    for(let i = 0; i < startOfMonth.day(); i++)
        dates.push({date: startOfMonth.day(i), currentMonth: false, 
        meetings: [{
            title: 'Call Alex',
            time: startOfMonth.day(i).hour(13).minute(30).format('H:mm')
        }]});

    //generate current dates
    for(let i = startOfMonth.date(); i <= endOfMonth.date(); i++)
    {   dates.push({date: startOfMonth.date(i), currentMonth: true, isToday: startOfMonth.date(i).isSame(dayjs().toDate().toDateString(), 'day'), 
        meetings: [{
            title: 'Some other important meeting',
            time: startOfMonth.day(i).hour(5).minute(30).format('HH:mm')
        },
        
        {
            title: 'Call Alex',
            time: startOfMonth.day(i).hour(13).minute(30).format('H:mm')
        }
        ]});

    }

    //generate suffix dates
    for(let i = endOfMonth.day() + 1; i < 7; i++)
        dates.push({date: endOfMonth.day(i), currentMonth: false, meetings: []});
    
    return dates;
}
 
export default generateDate;

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];