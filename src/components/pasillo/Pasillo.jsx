import './Pasillo.css';

const Pasillo = ({ data }) => {

    const { pasillo } = data;

    if(pasillo === undefined) {
        return
    }

    return (
        <>
            <h1>Pasillo</h1>
            <div className='pasilloContainer'>
                {
                    pasillo.map(item => <h2 key={item} >{item}</h2>)
                }
            </div>
        </>
    )
}

export default Pasillo
