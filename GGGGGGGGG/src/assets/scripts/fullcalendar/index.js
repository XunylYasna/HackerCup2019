import * as $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.min.js';
import 'fullcalendar/dist/fullcalendar.min.css';

export default (function () {
  const date = new Date();
  const d    = date.getDate();
  const m    = date.getMonth();
  const y    = date.getFullYear();

  const events = [{
    title  : 'Pick up',
    start  : new Date(y, m, 1),
    desc   : 'Crops',
    bullet : 'La Union',
  }, {
    title  : 'Pick up',
    start  : new Date(y, m, 19),
    allDay : false,
    desc   : 'Crops',
    bullet : 'Benguet',
  bullet : 'success',}
];

  $('#full-calendar').fullCalendar({
    events,
    height   : 800,
    editable : true,
    header: {
      left   : 'month,agendaWeek,agendaDay',
      center : 'title',
      right  : 'today prev,next',
    },
  });
}())
