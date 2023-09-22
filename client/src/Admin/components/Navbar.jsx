import React from 'react'
import { useDispatch } from 'react-redux'
import { AdminLogOut } from '../../redux/Actions/AdminAction'

const Navbar = () => {

    const dispatch = useDispatch()


    return <>

        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <button onClick={e => dispatch(AdminLogOut())} type="button" class="btn btn-primary">Log Out</button>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>


    </>
}

export default Navbar