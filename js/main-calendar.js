formatGoogleCalendar.init({
	calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/f79777p89dulncc9ihainrlbf0@group.calendar.google.com/events?key=AIzaSyB8YjJeOQg3Z-_2YpcbE6EsMw3JYpAJbbg',
	past: true,
	upcoming: true,
	pastTopN: 3,
	upcomingTopN: 3,
	itemsTagName: 'li',
	upcomingSelector: '#events-upcoming',
	pastSelector: '#events-past',
	upcomingHeading: '<h2>Upcoming events</h2>',
	pastHeading: '<h2>Past events</h2>',
	format: ['*date*', ': ', '*summary*', ' — ', '*description*', ' in ', '*location*']
});

