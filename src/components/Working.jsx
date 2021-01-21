import React from 'react';
import imageWork from '../assets/static/work.jpg'
import 'fontsource-roboto';

const styles = {
    list_data: {
        display: 'flex' , 
        justifyContent: 'flex-start', 
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh',
        marginTop: '10px'
    }
};

const Working = () => {
    return (
        <div style={styles.list_data}>
            <h3>Esta pagina esta en construcción, pronto estara lista!</h3>
            <img src={imageWork} alt="en contruccion" width="500px"/>
        </div>
    )
}

export default Working;
