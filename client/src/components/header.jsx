import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
function Header(props)
{
    function handleLogout()
    {
        console.log("logout clicked")
        props.onLoggingOut();
        localStorage.clear();
    }
    return (
        <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-md">
            <h1 className="text-2xl font-bold mb-2 md:mb-0">BugAppTracker</h1>
            <ul className="flex gap-4 items-center">
                {
                    // checks if its true:user logged in successfully
                    props.checkLoggedIn &&
                    (
                        <ul className="flex gap-4 items-center">
                            <li>
                                <NavLink
                                    to="/"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                    to="/bug"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Bugs
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    )
                }
                {
                    !props.checkLoggedIn &&
                    (
                        <ul className="flex gap-4 items-center">
                            <li>
                                <NavLink
                                    to="/"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    )
                }
            </ul>
        </header>
    )
}

const mapInitializeStateToProps = (state)=>{
    return {
        checkLoggedIn: state.isLoggedIn
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        onLoggingOut: ()=>{dispatch({type:"LOGOUT"})}
    }
}

export default connect(mapInitializeStateToProps, mapDispatchToProps)(Header)