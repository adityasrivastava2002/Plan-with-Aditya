import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div>
            <div>
                <h2 className='heading'>Plan with Aditya</h2>
            </div>
            <div className='card-container'>{
                tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
            }</div>
        </div>
        
    );
}

export default Tours;