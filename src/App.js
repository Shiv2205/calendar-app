import { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import Days from "./Components/Days";
import DateContext from "./util/dateContext";
import CalendarHeader from "./Components/CalendarHeader";
import CalendarGrid from "./Components/CalendarGrid";
import MeetingsTab from "./Components/MeetingsTab";
import CalendarContext from "./util/calendarContext";

function App() {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState({getDate: currentDate, today: true, dateIndex: 0});
  const [meetings, setMeetings] = useState([]);
  const calendar = useContext(DateContext);
  const date = useContext(CalendarContext);

  return (
  <DateContext.Provider value={{ //States, functions and values accessible globally
    currentDate: today,
    setCurrentDate: setToday,
    activeDate: selectedDate,
    setActiveDate: setSelectedDate,
    DateOfToday: currentDate,
    //datesArray: date//generateDate(currentDate.month(), currentDate.year())
  }}>
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
      <div className="w-96 h-96 "> {/**Generates calendar */}
        <CalendarHeader/>
        <Days/>
        <CalendarGrid setMeetings={setMeetings}/>
        
      </div>

      <MeetingsTab meetings={date[selectedDate.dateIndex].meetings} setMeetings={setMeetings} /> {/**Generates meetings tab  meetings={meetings}*/}

    </div>
  </DateContext.Provider>
  );
}

export default App;
