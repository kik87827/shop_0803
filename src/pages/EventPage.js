import { Outlet } from "react-router-dom";

function EventPage() {
    return (
        <>
            <h4>오늘의 이벤트</h4>
            <Outlet />
        </>
    )
}

export default EventPage;