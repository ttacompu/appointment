import { useState } from 'react';
const appoinmentTimeOfDay = (startsAt) => {
    const [h, m] = new Date(startsAt)
        .toTimeString()
        .split(":");
    return `${h}:${m}`
}
export function Appointment({ customer }) {
    return customer.firstName;
}

export function AppointmentsDayView({ appointments }) {
    const [currentAppointmentIndex, setCurrentAppointmentIndex] = useState(0);

    return (<div id="appointmentsDayView">
        <ol >
            {
                appointments.map((x, i) =>
                    <li key={x.startsAt}>
                        <button type="button" onClick={() => setCurrentAppointmentIndex(i)}>{appoinmentTimeOfDay(x.startsAt)}</button>
                    </li>)
            }
        </ol >

        {appointments.length === 0 ? (
            <p>There are no appointments scheduled for today.</p>
        ) : (<Appointment {...appointments[currentAppointmentIndex]} />)}

    </div>);
}





