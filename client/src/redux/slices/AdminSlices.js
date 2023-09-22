import { createSlice } from "@reduxjs/toolkit";
import { AddOrder, AddUser, AdminLogOut, AdminLogin, ClientHistoryFilter, DeleteUser, GetUser, GetUserOrder } from "../Actions/AdminAction";

const AdminSlice = createSlice({
    name: "AdminSlice",
    initialState: { auth: JSON.parse(localStorage.getItem("auth")) },
    reducers: {
        invalidate: (state, { payload }) => {
            state.Adduser = false
            state.userDelete = false
        },
        filterHistory: (state, { payload }) => {
            state.userOrders = state.userOrders.filter(item => {
                const d = new Date(item.date)
                const m = d.getMonth()
                return m === +payload
            })
        }
    },
    extraReducers: builder => builder
        .addCase(AdminLogin.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(AdminLogin.fulfilled, (state, { payload }) => {
            state.loading = false
            state.auth = payload
        })
        .addCase(AdminLogin.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })



        .addCase(AdminLogOut.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(AdminLogOut.fulfilled, (state, { payload }) => {
            state.loading = false
            state.auth = null
        })
        .addCase(AdminLogOut.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })






        .addCase(AddUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(AddUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.Adduser = true
        })
        .addCase(AddUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })



        .addCase(GetUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(GetUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.users = payload
        })
        .addCase(GetUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })




        .addCase(DeleteUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(DeleteUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userDelete = true
        })
        .addCase(DeleteUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })





        .addCase(AddOrder.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(AddOrder.fulfilled, (state, { payload }) => {
            state.loading = false
            state.orderAdd = true
        })
        .addCase(AddOrder.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })






        .addCase(GetUserOrder.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(GetUserOrder.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userOrders = payload
        })
        .addCase(GetUserOrder.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })






        .addCase(ClientHistoryFilter.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(ClientHistoryFilter.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userOrders = payload
        })
        .addCase(ClientHistoryFilter.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })




})

export const { invalidate, filterHistory } = AdminSlice.actions
export default AdminSlice.reducer