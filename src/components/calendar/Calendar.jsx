import "./calendar.scss";

var gapi = window.gapi;
var CLIENT_ID =
  "127126638961-k7fvpi6685ugcpmvbj57oe2r9p4erc21.apps.googleusercontent.com";
var API_KEY = "AIzaSyBYJfukA4C8b7Kl8pkRqSY5FpcTjHTi60I";
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

const handleClick = () => {
  gapi.load("client:auth2", () => {
    console.log("loaded client");

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });

    gapi.client.load("calendar", "v3", () => console.log("Connection made"));

    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        var event = {
          summary: "TEST EVENT",
          location: "800 Howard St., San Francisco, CA 94103",
          description: "Really great refreshments",
          start: {
            dateTime: "2020-06-28T09:00:00-07:00",
            timeZone: "America/Los_Angeles",
          },
          end: {
            dateTime: "2020-06-28T17:00:00-07:00",
            timeZone: "America/Los_Angeles",
          },
          recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
          attendees: [
            { email: "lpage@example.com" },
            { email: "sbrin@example.com" },
          ],
          reminders: {
            useDefault: false,
            overrides: [
              { method: "email", minutes: 24 * 60 },
              { method: "popup", minutes: 10 },
            ],
          },
        };

        var request = gapi.client.calendar.events.insert({
          calendarId: "primary",
          resource: event,
        });

        request.execute((event) => {
          console.log(event);
          window.open(event.htmlLink);
        });

        gapi.client.calendar.events
          .list({
            calendarId: "primary",
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 10,
            orderBy: "startTime",
          })
          .then((response) => {
            const events = response.result.items;
            console.log("Revieved events:  ", events);
          });
      });
  });
};

export default function Calendar() {
  return (
    <div className="calendar" id="calendar">
      <button onClick={handleClick}>Get event</button>
    </div>
  );
}
