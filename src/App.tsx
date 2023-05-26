import React, { useState } from "react";
import "./App.css";
import Arrow from "../src/images/icon-arrow.svg";
import dayjs from "dayjs";

function App() {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [calDay, setCalDay] = useState<number>();
  const [calMonth, setCalMonth] = useState<number>();
  const [calYear, setCalYear] = useState<number>();

  const calAge = () => {
    const dateNow = dayjs()
    var startDate = new Date(Number(year), Number(month)-1, Number(day))
    const formatDate = dayjs(startDate)
    const totalDay = dateNow.diff(formatDate, 'day')
    const totalMonth = dateNow.diff(formatDate, 'month')
    const totalYear = dateNow.diff(formatDate, 'year')
    setCalDay(totalDay % 30)
    setCalMonth(totalMonth % 12)
    setCalYear(totalYear)
  }

  return (
    <div className="flex min-h-screen w-screen bg-off-white justify-center items-center">
      <div className="bg-white p-10 rounded-xl rounded-br-[150px]">
        {/* input-section */}
        <div>
          <div className="flex space-x-4 pb-10 mb-10 pr-28 mr-4 border-b-2 border-off-white relative">
            <div>
              <p className="font-bold text-sm tracking-widest text-smokey-grey mb-2">
                DAY
              </p>
              <input
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="text-3xl font-bold p-4 w-40 border border-off-white rounded-md outline-none focus:border-light-purple caret-light-purple"
                type="text"
                placeholder="DD"
                maxLength={2}
              />
            </div>
            <div>
              <p className="font-bold text-sm tracking-widest text-smokey-grey mb-2">
                MONTH
              </p>
              <input
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="text-3xl font-bold p-4 w-40 border border-off-white rounded-md outline-none focus:border-light-purple caret-light-purple"
                type="text"
                placeholder="MM"
                maxLength={2}
              />
            </div>
            <div>
              <p className="font-bold text-sm tracking-widest text-smokey-grey mb-2">
                YEAR
              </p>
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="text-3xl font-bold p-4 w-40 border border-off-white rounded-md outline-none focus:border-light-purple caret-light-purple"
                type="text"
                placeholder="YYYY"
                maxLength={4}
              />
            </div>
            <button className="bg-light-purple w-16 h-16 p-4 rounded-full absolute bottom-[-32px] right-0 hover:bg-black transition-colors duration-200" onClick={calAge}>
              {" "}
              <img src={Arrow} alt="arrow-submit" />
            </button>
          </div>
        </div>
        {/* display-section */}
        <div>
          <h1 className="font-extrabold text-7xl italic">
            <span className="text-light-purple">{calYear || calYear === 0 ? calYear : "- -"}</span> years
          </h1>
          <h1 className="font-extrabold text-7xl italic">
            <span className="text-light-purple">{calMonth || calMonth === 0 ? calMonth : "- -"}</span> months
          </h1>
          <h1 className="font-extrabold text-7xl italic">
            <span className="text-light-purple">{calDay || calDay === 0 ? calDay : "- -"}</span> days
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
