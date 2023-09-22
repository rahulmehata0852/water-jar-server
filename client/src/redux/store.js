import { configureStore } from "@reduxjs/toolkit";
import AdminSlices from "./slices/AdminSlices";


const reduxStore = configureStore({
    reducer: {
        admin: AdminSlices
    },
})

export default reduxStore