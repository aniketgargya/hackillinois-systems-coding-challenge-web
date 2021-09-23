import { useEffect, useState } from "react";
import { fetchMentors, validateMentorsResponse } from "../functions";
import Profile from "../components/profile";
import Loader from "../components/loader";
import Head from "next/head";

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
            <Head>
                <title>HackIllinois | Mentors</title>
                <meta name="description" content="The mentors of HackIllinois." />
            </Head>

            <main>
                <h1>A <span className="highlight">Toast</span> to Our {/* <span className="highlight">Hack&nbsp;Illinois</span> */} Mentors</h1>
                {fetchStatus.loading && <Loader />}
                {!fetchStatus.loading && fetchStatus.err && <div className="info">{fetchStatus.err.toString()}</div>}
                {!fetchStatus.loading && fetchStatus.data && fetchStatus.data.map(({ profile, firstName, lastName, description }, i) => (
                    <Profile key={i} profile={profile} name={`${firstName} ${lastName}`} description={description} />
                ))}
            </main>
        </>
    );
};

export default Mentors;
