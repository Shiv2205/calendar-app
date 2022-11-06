import { useState } from "react";
import dayjs from "dayjs";
import generateDate, { months } from "./util/Calendar";
import cn from "./util/cn";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import MeetingCard from "./MeetingCard";

function App() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState({getDate: currentDate, today: true});
  const [meetings, setMeetings] = useState([]);

  return (
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
      <div className="w-96 h-96 ">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
          </div>

          <div className="flex items-center gap-5">
            <GrCaretPrevious
              className="cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />

            <h1
              className="cursor-pointer"
              onClick={() => {
                setToday(currentDate);
                setSelectedDate({getDate: currentDate, today: true});
              }}
            >
              Today
            </h1>

            <GrCaretNext
              className="cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-7">
          {days.map((day, index) => {
            // S M T...F S
            return (
              <h1
                key={index}
                className="h-10 grid place-content-center text-sm text-gray-600"
              >
                {day}
              </h1>
            );
          })}
        </div>
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
  );
}

export default App;
