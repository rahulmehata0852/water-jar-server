import React, { useEffect, useState } from 'react'
import useDymanicForm from '../../hooks/useDynamicForm'
import { useDispatch, useSelector } from 'react-redux'
import { AddOrder, AddUser, ClientHistoryFilter, DeleteUser, GetUser, GetUserOrder } from '../../redux/Actions/AdminAction'
import { filterHistory, invalidate } from '../../redux/slices/AdminSlices'
import { toast } from 'react-toastify'

const Dashboard = () => {



    const [selectedMonth, setselectedMonth] = useState()

    const [show, setshow] = useState(false)

    const dispatch = useDispatch()
    const handleSubmit = e => {
        dispatch(AddUser(state))
    }


    const config = [
        { fieldName: "fname", type: "text" },
        { fieldName: "address", type: "text" },
        { fieldName: "mobile", type: "number" },
        { fieldName: "Add New Customer", type: "submit", onClick: handleSubmit },
    ]
    const [selectedUser, setselectedUser] = useState()

    const handleOrderSubmit = e => {
        dispatch(AddOrder({ ...orstate, userId: selectedUser.id }))
    }


    const [ui, state, pre] = useDymanicForm(config)
    const [orui, orstate, orpre] = useDymanicForm(
        [
            { fieldName: "Jars", type: "number" },
            { fieldName: "date", type: "date" },
            { fieldName: "Add New Order", type: "submit", onClick: handleOrderSubmit }
        ]
    )


    const { users, Adduser, userDelete, userOrders } = useSelector(state => state.admin)


    useEffect(() => {
        if (AddUser) {
            dispatch(GetUser())
            dispatch(invalidate())
            toast.success("User Add Successfully")
        }
    }, [Adduser])


    useEffect(() => {
        if (userDelete) {
            dispatch(GetUser())
            dispatch(invalidate())
            toast.error("User Delete Successfully")
        }
    }, [userDelete])

    useEffect(() => {
        dispatch(GetUser())

    }, [])







    // const filteredBills = userOrders && userOrders.filter(bill => {
    //     const billDate = new Date(bill.date);
    //     return billDate.getMonth() === +selectedMonth; // Subtract 1 since getMonth() returns 0 for January
    // });


    // console.log(filteredBills, selectedMonth);


    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    return <>


        <div className="text-right mt-2 me-11">

            <button className="btn btn-primary mt-7" onClick={() => window.my_modal_3.showModal()}>Add Customer</button>
        </div>


        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Add New Customer!</h3>
                <p className="py-4">{ui}</p>
            </form>
        </dialog>



        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users && users.map(item => <tr key={item.id}>

                            <td>{item.id}</td>
                            <td>{item.fname}</td>
                            <td>{item.address}</td>
                            <td>{item.mobile}</td>
                            <td className='flex gap-3'>
                                <button onClick={() => { window.my_modal_4.showModal(), setselectedUser(item) }} type="button" class="btn btn-primary"><sup className='text-lg'>+</sup>Order</button>
                                <button onClick={() => { window.my_modal_5.showModal(), dispatch(GetUserOrder(item.id)), setselectedUser(item) }} className="btn btn-primary">History</button>
                                <button onClick={e => dispatch(DeleteUser(item.id))} type="button" class="btn btn-error">Delete</button>
                            </td>

                        </tr>
                        )
                    }



                </tbody>

            </table>
        </div>




        {/* Order Modal */}


        <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello Add Order !</h3>
                <p className="py-4">
                    {orui}
                </p>
            </form>
        </dialog>





        <dialog id="my_modal_5" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello!</h3>
                <select onChange={e => {
                    dispatch(ClientHistoryFilter({
                        id: selectedUser.id,
                        month: e.target.value
                    }

                    ))
                }} name='date' className="select select-bordered w-full max-w-xs">
                    <option className='disabled' value="">Choose Months</option>
                    {
                        MONTHS.map((m, i) => <option value={i + 1}>{m}</option>)
                    }
                </select>

                <div className="font-semibold mt-5 text-base font-sans gap-4 flex">
                    <strong>Bill :</strong>
                    {
                        userOrders && userOrders.reduce((sum, item) => sum + +item.Jars, 0) * 25
                    }

                </div>

                <p className="py-4">

                    {
                        userOrders && userOrders.length === 0 &&
                        <> <h1 className='bg-red-500 mt-5 rounded-xl bg-gradient-to-r from-sky-500 to-rose-300 font-semibold text-center    p-4'>No record on selected Month</h1> </>
                    }

                    {
                        userOrders && userOrders.map(item => <div className='border-2 my-4 rounded-lg p-2 border-slate-300'>



                            <h1>Jars : {item.Jars}</h1>
                            <h1>Date : {item.date}</h1>
                            <h1>Price :  25</h1>

                        </div>)
                    }




                </p>
            </form>
        </dialog >





    </>
}

export default Dashboard