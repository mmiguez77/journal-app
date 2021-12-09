import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccqtYSqOcDnpRoTOkgxf7XzfzXUT7t38u-QBTerWAfuIeIEyg7WB02pFOhD5tWHexBnw&usqp=CAU)"
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Titulo</p>
                <p className="journal__entry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iusto.</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Lunes</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
