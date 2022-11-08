import { months } from "../util/Calendar";
import { useContext } from "react";
import DateContext from "../util/dateContext";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const CalendarHeader = () => {

    const calendar = useContext(DateContext);

    return ( 
    <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">
            {months[calendar.currentDate.month()]}, {calendar.currentDate.year()}
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <GrCaretPrevious
            className="cursor-pointer"
            onClick={() => {
              calendar.setCurrentDate(calendar.currentDate.month(calendar.currentDate.month() - 1));
            }}
          />

          <h1
            className="cursor-pointer"
            onClick={() => {
              calendar.setCurrentDate(calendar.DateOfToday);
              calendar.setActiveDate({getDate: calendar.DateOfToday, today: true, dateIndex: 0});
            }}
          >
            Today
          </h1>

          <GrCaretNext
            className="cursor-pointer"
            onClick={() => {
              calendar.setCurrentDate(calendar.currentDate.month(calendar.currentDate.month() + 1));
            }}
          />
        </div>
      </div>

     );
}
 
export default CalendarHeader;