import { Outlet } from "react-router-dom";

function AboutPage() {
    return (
        <div>어바웃페이지
            <Outlet />
        </div>
    )
}

export default AboutPage;