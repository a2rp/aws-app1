import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "/api/v1",
});

function App() {
    const [message, setMessage] = useState("Loading backend message...");
    const [dateTime, setDateTime] = useState(() => new Date());

    useEffect(() => {
        let active = true;

        const loadMessage = async () => {
            try {
                const response = await apiClient.get("/a2rp");
                const data = response.data || {};

                if (!active) {
                    return;
                }

                setMessage(
                    data.success && data.message
                        ? data.message
                        : "The backend returned an unexpected response.",
                );
            } catch (error) {
                if (!active) {
                    return;
                }

                const errorMessage =
                    error.response?.data?.message ||
                    error.message ||
                    "Unable to reach the backend.";

                toast.error(errorMessage);
                setMessage(errorMessage);
            }
        };

        loadMessage();

        return () => {
            active = false;
        };
    }, []);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.messageFromAPI}>Message from backend &rArr; {message}</div>
            <div className={styles.dateTime}>
                Local date and time &rArr; {dateTime.toLocaleString()}
            </div>

            <ToastContainer />
        </div>
    );
}

export default App;
