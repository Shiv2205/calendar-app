import CalendarHeader from "./CalendarHeader";
import Days from "./Days";
import CalendarGrid from "./CalendarGrid";
import MeetingsTab from "./MeetingsTab";
import DateContext from "../util/dateContext";
import CalendarContext from "../util/calendarContext";
import { useContext } from "react";

const CalendarCard = () => {

  const date = useContext(DateContext);
  const calendar = useContext(CalendarContext);

  return (
    <div class="flex w-96 h-96 items-center mb-2 ">
      <div class="bg-white block p-4 rounded-lg shadow-2xl ">
        <div className="flex mx-auto divide-x-2 gap-10 h-96 items-center">
          
          <div className="w-96 h-96 "> {/**Generates calendar */}
            <CalendarHeader/>
            <Days/>
            <CalendarGrid/>
          </div>

          <MeetingsTab /> {/**Generates meetings tab  meetings={meetings}*/}

        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
