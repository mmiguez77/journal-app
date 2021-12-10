import React from 'react';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">

    
                <input 
                    type="text" 
                    placeholder="Algún titulo brillante"
                    className="notes__title-input"
                />
                
                <textarea
                    placeholder="¿Nueva tarea?"
                    className="notes__textarea"
                >
                </textarea>
                
                <div className="notes__image">
                    <img 
                        src="https://www.cinconoticias.com/wp-content/uploads/paraiso-terrenal-Colon.jpg" 
                        alt="imagen" 
                    />
                </div>

               

            </div>

        </div>
    )
}
