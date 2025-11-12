import axios, {} from 'axios';
const fetchData = async () => {
    try {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo ", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios Error", error.message);
            if (error.response) {
                console.log("Status: ", error.response.status);
                console.log("Data: ", error.response.data);
            }
            else {
                console.error("Error", error.message);
            }
        }
    }
};
//# sourceMappingURL=index.js.map