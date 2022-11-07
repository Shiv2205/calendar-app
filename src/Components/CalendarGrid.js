import generateDate from "../util/Calendar";
import cn from "../util/cn";
import DateContext from "../util/dateContext";
import { useContext } from "react";

const CalendarGrid = (props) => {
  

  const calendar = useContext(DateContext);  

  return (
    <div className="w-full grid grid-cols-7">
      {generateDate(calendar.currentDate.month(), calendar.currentDate.year()).map(
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
                  calendar.setActiveDate({ getDate: date, today: isToday });
                  props.setMeetings([...meetings]);
                }}
              >
                {date.date()}
              </h1>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CalendarGrid;
