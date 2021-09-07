import { useEffect, useState } from "react";
import axios from "axios";

// Returns a tuple with either the first value containing the error and the second value containing the response, exactly one will be null
const fetchMentors = async () => {
    try {
        return [null, await axios("https://api.hackillinois.org/upload/blobstore/mentors/")];
    } catch (err) {
        return [err, null];
    }
};

// Returns whether the mentors response is valid
const validateMentorsResponse = mentorsResponse => {
    return mentorsResponse.data.id == "mentors"
        && mentorsResponse.data.data.every(mentor => ["description", "firstName", "lastName", "profile"].every(key => key in mentor));
};

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
            <h1>Hack Illinois</h1>
            {fetchStatus.loading && <p>Loading...</p>}
            {!fetchStatus.loading && fetchStatus.err && <p>{fetchStatus.err.toString()}</p>}
            {!fetchStatus.loading && fetchStatus.data && <pre>{JSON.stringify(fetchStatus.data, null, 4)}</pre>}
        </>
    );
};

export default Mentors;
