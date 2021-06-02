import "./calender.css";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Calender() {
  let history = useHistory();
  let today = new Date();
  // console.log(today);
  let month = today.getMonth();
  let year = today.getFullYear();
  // console.log(month,year);

  let [date, setdate] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(month);
  let [currentYear, setCurrentYear] = useState(year);

  let [dropMonth, setdropMonth] = useState(currentMonth);
  let [dropYear, setdropYear] = useState(currentYear);

  let monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  // console.log(monthsArray[month]);

  let firstDay = new Date(currentYear, currentMonth).getDate();
  let StartDay = new Date(currentYear, currentMonth).getDay();
  // console.log(StartDay);

  let totalDays = 32 - new Date(currentYear, currentMonth, 32).getDate();
  let total = new Date(currentYear, currentMonth, 32).getDate();
  // console.log(totalDays);

  let days = [];
  let day = firstDay;
  while (day <= 42) {
    days.push(day);
    day = day + 1;
  }

  // console.log(days);

  let displayList = (d) => {
    // console.log(parseInt(d));
    // alert(monthsArray[currentMonth], currentYear);
    let currentDay = new Date(currentYear, currentMonth, d);
    setdate(currentDay);
    history.push("/list/" + currentDay);
    //  alert(currentDay)
  };

  const pre = () => {
    currentMonth === 0
      ? setCurrentMonth(11)
      : setCurrentMonth(currentMonth - 1);
    currentMonth === 0
      ? setCurrentYear(currentYear - 1)
      : setCurrentYear(currentYear);
    // console.log(currentMonth, currentYear);

    setdropYear(currentYear);
    setdropMonth(currentMonth);
  };

  const next = () => {
    setCurrentMonth((currentMonth + 1) % 12);
    currentMonth === 11
      ? setCurrentYear(currentYear + 1)
      : setCurrentYear(currentYear);
    // console.log(currentMonth, currentYear);
    setdropYear(currentYear);
    setdropMonth(currentMonth);
  };

  return (
    <div className="main_container">
      <div className="right_container">
        <h1>{currentYear}</h1>

        <div className="heading">
          <button className="btn" onClick={() => pre()} type="button">
            {"<"}
          </button>
          <h1> {monthsArray[currentMonth]}</h1>
          {"    "}

          <button className="btn" onClick={() => next()} type="button">
            {">"}
          </button>
        </div>

        <div className="calender-body">
          <table class="table">
            <thead>
              <tr className="head">
                {weekDays.map((weekDay) => (
                  <th className="headbody">{weekDay}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="body">
                {days.map((day, index) => {
                  if (index < StartDay) {
                    return <td className="cell"> {""} </td>;
                  } else if (day > totalDays + StartDay) {
                    return <td className="cell">{""}</td>;
                  } else {
                    return (
                      <td
                        onClick={(e) => displayList(e.target.dataset.value)}
                        data-value={day - StartDay}
                        className="cell"
                      >
                        {day - StartDay}
                      </td>
                    );
                  }
                })}
              </tr>
            </tbody>

            <select
              onChange={(e) => {
                setCurrentYear(
                  parseInt(e.target.value),
                  setdropYear(e.target.value)
                );
              }}
              value={currentYear}
              name="dropYear"
              class="form-select"
            >
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>

            <select
              onChange={(e) => {
                setCurrentMonth(
                  parseInt(e.target.value),
                  setdropMonth(e.target.value)
                );
              }}
              value={currentMonth}
              name="dropMonth"
              class="form-select"
              aria-label="Default select example"
            >
              <option value="0">Jan</option>
              <option value="1">Feb</option>
              <option value="2">Mar</option>
              <option value="3">Apr</option>
              <option value="4">May</option>
              <option value="5">Jun</option>
              <option value="6">Jul</option>
              <option value="7">Aug</option>
              <option value="8">Sep</option>
              <option value="9">Oct</option>
              <option value="10">Nov</option>
              <option value="11">Dec</option>
            </select>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calender;
