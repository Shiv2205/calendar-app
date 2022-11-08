import DateContext from "../util/dateContext";
import CalendarContext from "../util/calendarContext";
import { useContext, useState } from "react";
import MeetingCard from "./MeetingCard";
import { GrAddCircle } from 'react-icons/gr';
import AddMeetingForm from "./AddMeetingForm";

const MeetingsTab = (props) => {

  const date = useContext(DateContext);
  const calendar = useContext(CalendarContext);
  let index = date.activeDate.dateIndex;
  let count = 0;
  const [addMeeting, setAddMeeting] = useState(false);

  return (
    <div className="h-96 w-96 pl-5">
      <h1 className="font-semibold">
        Schedule for {date.activeDate.getDate.toDate().toDateString()}
      </h1>
      {calendar[index].meetings.map((obj) => {
        //display meetings, if any|| calendar.datesArray[index]
    
        return (
          <MeetingCard
            isToday={date.activeDate.today}
            title={obj.title}
            time={obj.time}
            key={++count}
          />
        );
      })}

      {addMeeting ? <AddMeetingForm  index={index} meetingSet={setAddMeeting}/> : <GrAddCircle className="h-10 hover:cursor-pointer" onClick={() => {setAddMeeting(true)}} size={20}/>}
    </div>
  );
};

export default MeetingsTab;
