import "./calendar.scss";
import React, { useState } from "react";
import cal from "./calendar.png";
var gapi = window.gapi;
var CLIENT_ID =
  "127126638961-k7fvpi6685ugcpmvbj57oe2r9p4erc21.apps.googleusercontent.com";
var API_KEY = "AIzaSyBYJfukA4C8b7Kl8pkRqSY5FpcTjHTi60I";
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

export default function Calendar() {
  const [state, setState] = useState([]);

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("Api initialised"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
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
              setState(events);
            });
        });
    });
  };

  return (
    <div className="calendar" id="calendar">
      <div className="title">
        <img src={cal} alt="calendar" />
        <h2>Calendar</h2>
        <button onClick={handleClick}>Login</button>
      </div>

      <div className="calendar-events">
        <div className="eventContainer">
          <div className="tableHeader">
            <h3>Date</h3>
            <h3>Title</h3>
            <h3>Description</h3>
          </div>
          {state.map((event) => (
            <div className="eventEntry">
              <h3 className="eventDate">{event.start.date}</h3>
              <h3 className="eventTitle">{event.summary}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
