import axios from "axios";

// Returns a tuple with either the first value containing the error and the second value containing the response, exactly one will be null
export const fetchMentors = async () => {
    // await new Promise(resolve => setTimeout(resolve, 3000));
    try {
        return [null, await axios("https://api.hackillinois.org/upload/blobstore/mentors/")];
    } catch (err) {
        return [err, null];
    }
};

// Returns whether the mentors response is valid
export const validateMentorsResponse = mentorsResponse => {
    return mentorsResponse.data.id == "mentors"
        && mentorsResponse.data.data.every(mentor => ["description", "firstName", "lastName", "profile"].every(key => key in mentor));
};
