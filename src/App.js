import { useState } from "react";
import dayjs from "dayjs";
import generateDate from "./util/Calendar";
import cn from "./util/cn";
import MeetingCard from "./MeetingCard";
import Days from "./Days";
import DateContext from "./util/dateContext";
import CalendarHeader from "./CalendarHeader";

function App() {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState({getDate: currentDate, today: true});
  const [meetings, setMeetings] = useState([]);

  return (
  <DateContext.Provider value={{
    currentDate: today,
    setCurrentDate: setToday,
    activeDate: selectedDate,
    setActiveDate: setSelectedDate,
    DateOfToday: currentDate
  }}>
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">


      <div className="w-96 h-96 ">
        
        <CalendarHeader/>

        <Days/>
        
        <div className="w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, isToday, meetings }, index) => {
              //today.month(), today.year()

              return (
                <div
                  key={index}
                  className="h-14 border-t grid place-content-center text-sm"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      isToday ? "bg-purple-700 text-white" : "",
                      "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                    )}
                    onClick={() => {
                      setSelectedDate({getDate: date, today: isToday});
                      setMeetings([...meetings]);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="h-96 w-96 pl-5">
        <h1 className="font-semibold">
          Schedule for {selectedDate.getDate.toDate().toDateString()}
        </h1>
        {meetings.map((obj) => {//display meetings, if any
          return (
           <MeetingCard isToday={selectedDate.today} title={obj.title} time={obj.time}/>
          );
        })}
      </div>
    </div>
  </DateContext.Provider>
  );
}

export default App;
