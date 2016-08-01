/**
 * Created by Administrator on 2016/8/1.
 */
import React from 'react'
import {Link} from 'react-router'
export default()=>{
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Red dice</Link>
                </div>


                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}