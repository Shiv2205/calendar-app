import cn from "../util/cn";

function MeetingCard(props) {
    return ( 
        <div className="flex justify-left mb-2">
            <div className={cn(props.isToday ? "bg-purple-600 text-white" : "bg-gray-400", "block p-4 rounded-lg shadow-lg w-72")}>
                <h2 className=" text-xl leading-tight font-medium mb-2">{props.title}</h2>
                <p className=" text-base ">{props.time}</p>
            </div>
        </div>
     );
}

export default MeetingCard;
