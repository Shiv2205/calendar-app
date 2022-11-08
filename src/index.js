import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CalendarContext from './util/calendarContext';
import generateDate from './util/Calendar';
import dayjs from 'dayjs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalendarContext.Provider value={generateDate(dayjs().month(), dayjs().year())}>
      <App />
    </CalendarContext.Provider>
  </React.StrictMode>
);

