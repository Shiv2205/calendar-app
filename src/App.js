import { useState } from "react";
import dayjs from "dayjs";
import Days from "./Components/Days";
import DateContext from "./util/dateContext";
import CalendarHeader from "./Components/CalendarHeader";
import CalendarGrid from "./Components/CalendarGrid";
import MeetingsTab from "./Components/MeetingsTab";

function App() {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState({getDate: currentDate, today: true});
  const [meetings, setMeetings] = useState([]);

  return (
  <DateContext.Provider value={{ //States, functions and values accessible globally
    currentDate: today,
    setCurrentDate: setToday,
    activeDate: selectedDate,
    setActiveDate: setSelectedDate,
    DateOfToday: currentDate
  }}>
    <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center">
      <div className="w-96 h-96 "> {/**Generates calendar */}
        <CalendarHeader/>
        <Days/>
        <CalendarGrid setMeetings={setMeetings}/>
      </div>

      <MeetingsTab meetings={meetings} /> {/**Generates meetings tab */}

    </div>
  </DateContext.Provider>
  );
}

export default App;
