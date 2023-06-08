
import { Form, Button, Card } from '@themesberg/react-bootstrap';

export const EditBay = (props) => {

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Select a bus</Form.Label>
            <Form.Select>
              <option defaultValue>Open this select menu</option>
              <option>121</option>
              <option>131</option>
              <option>97</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" color="dark" className="w-100">
            Park Bus
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
