import cn from "./util/cn";

function MeetingCard(props) {
    return ( 
        <div class="flex justify-left mb-2">
            <div class={cn(props.isToday ? "bg-purple-600 text-white" : "bg-gray-400", "block p-4 rounded-lg shadow-lg w-80")}>
                <h2 class=" text-xl leading-tight font-medium mb-2">{props.title}</h2>
                <p class=" text-base ">{props.time}</p>
            </div>
        </div>
     );
}

export default MeetingCard;