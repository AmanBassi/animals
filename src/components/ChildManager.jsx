import Child from "./Child"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ChildManager = ({ animalsArray }) => {
    return (
        <div>
            <h2>Child Manager</h2>
            <Container>
                <Row>
                    {animalsArray.map((animal) => (
                        <Col md={4}>
                            <Child animal={animal} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ChildManager
