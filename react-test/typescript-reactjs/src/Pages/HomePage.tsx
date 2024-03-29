import { useState } from 'react'
import ListGroup from '../components/ListGroup';
import Alert from '../components/Alert';
import Button from '../components/Button';

const HomePage = () => {
    const items = [
        'New York',
        'San Franciso',
        'Tokyo',
        'Paris', 
        'London',
        'Toronto'
    ]

    const [showAlert, setShowAlert] = useState(false);

    const handleSelectItem = (item: string) => {{
      console.log(item);
    }}

    return (
        <div>
          <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />    
          {showAlert && <Alert onClickCloseButton={() => {setShowAlert(false)}}>Hello <span>World</span> DinkDonk!</Alert>}


          <Button buttonText = "Primary" onClick={() => {setShowAlert(true)}} />
        </div>
    )
}

export default HomePage