import React from 'react';

const sortCard = () => {
    return (
        <div style={styles.card}>
            <form>
                <label>
                    Voi
                      <input type="checkbox" name="Voi" />
                </label>
                <label>
                    Tier
                     <input type="checkbox" name="Tier" />
                </label>
                <label>
                    Flash
                      <input type="checkbox" name="Flash" />
                </label>
                <label>
                    Zwipp
                      <input type="checkbox" name="Zwipp" />
                </label>


            </form>
        </div>

    )
}

export default sortCard;

const styles = {

    card: {
        height: 100,
        width: '80%',
        backgroundColor: '#343a40',
        color: '#ffffff',
        padding: 20,
        margin: 'auto',
        position: 'fixed',
        left: '10%',
        bottom: '20%',
        zIndex: 100,
        

    }
}