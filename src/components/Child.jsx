import Card from 'react-bootstrap/Card';

const Child = ({ animal }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={animal.image} />
            <Card.Body>
                <Card.Title>{animal.animalType}</Card.Title>
                <Card.Text>
                    Name: {animal.name} <br />
                    Is cute: {animal.isCute.toString()} <br />
                    Diet: <br />
                    {animal.diet.map((food) => (
                        <span>- {food}<br /></span>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Child
