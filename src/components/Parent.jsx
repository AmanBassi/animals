import Container from 'react-bootstrap/Container';
import ChildManager from './ChildManager';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Parent = () => {

    const animals = [
        {
            animalType: "Tiger",
            name: "Tony",
            image: "https://via.placeholder.com/150",
            diet: ["Frostys", "Other animals", "People"],
            isCute: false
        },
        {
            animalType: "Kola",
            name: "Keith",
            image: "https://via.placeholder.com/150",
            diet: ["Leaves", "Fruit"],
            isCute: true
        },
        {
            animalType: "Bear",
            name: "Winnie",
            image: "https://via.placeholder.com/150",
            diet: ["Honey", "Fish", "People"],
            isCute: true
        },
        {
            animalType: "Snake",
            name: "Draco",
            image: "https://via.placeholder.com/150",
            diet: ["Insects", "Frogs", "Eggs"],
            isCute: true
        },
        {
            animalType: "Bald Eagle",
            name: "Steve",
            image: "https://via.placeholder.com/150",
            diet: ["Fish", "Rabbits"],
            isCute: true
        }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        //const dataToSend = JSON.stringify({ username });
        console.log(event);
    }

    return (
        <div>
            <Container>
                <h1>Parent</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formAnimalType">
                        <Form.Label>Animal type?</Form.Label>
                        <Form.Control type="text" placeholder="Enter animal type" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAnimalName">
                        <Form.Label>Animal name?</Form.Label>
                        <Form.Control type="text" placeholder="Enter animal name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAnimalIsCute">
                        <Form.Check type="checkbox" label="Animal is cute?" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAnimalDiet">
                        <Form.Label>Animal diet?</Form.Label>
                        <Form.Control type="text" placeholder="Enter animal diet" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>

                <ChildManager animalsArray={animals} />
            </Container>
        </div>
    )
}

export default Parent;