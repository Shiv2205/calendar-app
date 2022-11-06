const days = ["S", "M", "T", "W", "T", "F", "S"];

const Days = () => {
    return ( 
        <div className="w-full grid grid-cols-7">
          {days.map((day, index) => {
            // S M T...F S
            return (
              <h1
                key={index}
                className="h-10 grid place-content-center text-sm text-gray-600"
              >
                {day}
              </h1>
            );
          })}
        </div>
     );
}
 
export default Days;