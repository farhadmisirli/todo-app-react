import './App.css';
import {Container} from '@mui/material';


// import components
import Header from './layouts/Header';
import Content from './layouts/Content';
import Test from './layouts/Test';


function App() {
    return (
        <>
        <Container maxWidth="sm">
        
        <Header />

        <Test />

        </Container>
        
        </>
    );
}

export default App;
