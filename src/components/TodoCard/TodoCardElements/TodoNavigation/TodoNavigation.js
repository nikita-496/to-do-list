import React from "react";
import './TodoNavigation.css';

export const TodoNavigation = () => {
        
        return <div className = "TodoNavigation">
                <div>
                  <span className="nav">Осталось дел - 1</span>
                </div>
                <div>
                  <button className ="btn">Все</button>
                  <button className ="btn">Активные</button>
                  <button className ="btn">Завершенные</button>
                </div>
                <div>
                   <span className="nav">Очистить завершенные</span>
                </div>
            </div>
    
}