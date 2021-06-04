import React from "react";
import { NavLink } from "react-router-dom";
import './TodoNavigation.css';

export const TodoNavigation = () => {
        
        return <div className = "TodoNavigation">
                <div>
                  <span className="nav">Осталось дел - 1</span>
                </div>
                <div>
                  <NavLink to="/all" className ="btn">Все</NavLink>
                  <NavLink  to="/active" className ="btn">Активные</NavLink>
                  <NavLink  to="/complate" className ="btn">Завершенные</NavLink>
                </div>
                <div>
                   <span className="nav">Очистить завершенные</span>
                </div>
            </div>
    
}