import DateContext from "../util/dateContext";
import { useContext } from "react";
import MeetingCard from "./MeetingCard";

const MeetingsTab = (props) => {

  const calendar = useContext(DateContext);  

  return (
    <div className="h-96 w-96 pl-5">
      <h1 className="font-semibold">
        Schedule for {calendar.activeDate.getDate.toDate().toDateString()}
      </h1>
      {props.meetings.map((obj) => {
        //display meetings, if any
        return (
          <MeetingCard
            isToday={calendar.activeDate.today}
            title={obj.title}
            time={obj.time}
          />
        );
      })}
    </div>
  );
};

export default MeetingsTab;
