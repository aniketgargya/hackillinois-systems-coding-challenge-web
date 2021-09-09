import { useEffect, useState } from "react";
import { fetchMentors, validateMentorsResponse } from "../functions";
import Profile from "../components/profile";
import Loader from "../components/loader";

const Mentors = () => {
    const [fetchStatus, setFetchStatus] = useState({ loading: true, err: null, data: null });

    useEffect(() => {
        const loadMentorsData = async () => {
            const [err, response] = await fetchMentors();
            if (err) setFetchStatus({ loading: false, err, data: null });
            else if (validateMentorsResponse(response)) setFetchStatus({ loading: false, err, data: response.data.data });
            else setFetchStatus({ loading: false, err: "Error: Unexpected data response", data: null });
        };

        loadMentorsData();
    }, []);

    return (
        <>
            <h1>Meet Our <span className="highlight">Hack&nbsp;Illinois</span> Mentors</h1>
            {fetchStatus.loading && <Loader />}
            {!fetchStatus.loading && fetchStatus.err && <div className="info">{fetchStatus.err.toString()}</div>}
            {!fetchStatus.loading && fetchStatus.data && fetchStatus.data.map(({ profile, firstName, lastName, description }, i) => (
                <Profile key={i} profile={profile} name={`${firstName} ${lastName}`} description={description} />
            ))}
        </>
    );
};

export default Mentors;
