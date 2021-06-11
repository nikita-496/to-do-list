import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
        
        return <div className = "TodoNavigation">
                <div>
                  <span className="nav">Осталось дел - 1</span>
                </div>
                <div>
                  <NavLink to="/all" className ="btn">Все</NavLink>
                  <NavLink to="/active" className ="btn">Активные</NavLink>
                  <NavLink to="/complated" className ="btn">Завершенные</NavLink>
                </div>
                <div>
                   <span className="nav">Очистить завершенные</span>
                </div>
            </div>
    
}