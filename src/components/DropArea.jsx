import { Card } from '@themesberg/react-bootstrap';

export const DropArea = (props) => {
    return (
        
      <Card border="light" className="shadow-sm">
        <Card.Body className="d-flex flex-row">
            <div style = {{width: "100%"}} className="drop-col">
                <span id="eDropTarget" className="drop-target">Drop to here</span>
                <div style = {{height: 588, width: "100%"}} className="tile-container"/>
            </div>
        </Card.Body>
      </Card>
    )
  }