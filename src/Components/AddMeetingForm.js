import { useContext } from "react";
import DateContext from "../util/dateContext";
import CalendarContext from "../util/calendarContext";
import { GrFormPrevious } from "react-icons/gr"; 

const AddMeetingForm = (props) => {
    const date = useContext(DateContext);
    const calendar = useContext(CalendarContext);

    //, props.setDatesArray
  return (
    <div className="block p-6 rounded-lg shadow-2xl bg-white max-w-sm">
        
      <GrFormPrevious className="rounded-full hover:bg-gray-400  cursor-pointer" size={28} onClick={()=>{props.meetingSet(false)}}/>

      <form onSubmit={(e)=>{handleSubmit(e, calendar[props.index].meetings, props.meetingSet)}}>

        <div className="form-group mb-6">
          <label htmlFor="title" className="form-label inline-block mb-2 text-gray-700">Title</label>
          <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
           id="title" placeholder="Title"required/>
        </div>

        <div className="form-group mb-6">
          <label htmlFor="time" className="form-label inline-block mb-2 text-gray-700">Time</label>
          <input type="time" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 hover:cursor-pointer focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="time"
            required/>
        </div>

        <button type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          Add Reminder
        </button>

      </form>
    </div>
  );
};

const handleSubmit = (e, datesArray, meetingSet) => {
     e.preventDefault();
     let reminder = {
        title: e.target[0].value,
        time: e.target[1].value
     }

     console.log((e.target[1].value).substring(0, (e.target[1].value).indexOf(":")));

     let dates = [];
     dates.sort()

     datesArray.push(reminder);
     datesArray.sort((a, b) => {return a.time.substring(0, a.time.indexOf(":")) - b.time.substring(0, b.time.indexOf(":"))});
     //setDatesArray(datesArray[index].meetings);
     meetingSet(false);
};

export default AddMeetingForm;
