import React from 'react'
import EventCard from '../Events/EventCard';
import './CheckIn.css'

export default function Checkin() {
  return(
    <div class="top">
      <EventCard eventname="Check In!" description="Thanks for coming to the garden! By checking in, you help the garden know when people usually come in and what they commonly do at the garden. This helps us figure out what equipment(s) should be ready, who needs to be at the garden to help in case of anything, and for us to gauge the priorities of the community. Your email is only used to identify the check ins."/>
      <iframe class="to_mid" src="https://docs.google.com/forms/d/e/1FAIpQLScvjeO_AuYTGzqcv_6G0at7u4vEizf-DAEi1nG-eh2dtx-IKw/viewform?embedded=true" width="640" height="546" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
}
