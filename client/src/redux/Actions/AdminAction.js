import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../API";




export const AdminLogin = createAsyncThunk(
    "AdminLogin",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get("/admin", {
                params: userData
            })

            if (data.length === 0) {
                return rejectWithValue("Inavlid Crsditals")
            } else {
                localStorage.setItem("auth", JSON.stringify(data[0]))
                return data[0]
            }


        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const AdminLogOut = createAsyncThunk(
    "AdminLogOut",
    async (userData, { rejectWithValue, getState }) => {
        try {
            localStorage.removeItem("auth")
        } catch (error) {
            return rejectWithValue(error.message)
        }


    })



export const AddUser = createAsyncThunk(
    "AddUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post("/users", userData)
            return "User Add Successfully"


        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const GetUser = createAsyncThunk(
    "GetUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get("/users")
            return data

        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })







export const DeleteUser = createAsyncThunk(
    "DeleteUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.delete(`/users/${userData}`)
            return "Delete Successfully"

        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })






export const AddOrder = createAsyncThunk(
    "AddOrder",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post(`/orders`, userData)
            return "Order Add Successfully"

        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })



export const GetUserOrder = createAsyncThunk(
    "userOrders",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get(`/orders`, {
                params: {
                    userId: userData
                }
            })
            return data

        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })



export const ClientHistoryFilter = createAsyncThunk(
    "ClientHistoryFilter",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get(`/orders`, {
                params: {
                    userId: userData.id
                }
            })
            return data.filter(item => {
                const d = new Date(item.date)
                const m = d.getMonth()
                return m === +userData.month
            })

        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })