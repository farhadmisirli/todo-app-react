import './App.css';
import {Container} from '@mui/material';


// import components
import Header from './layouts/Header';
import Content from './layouts/Content';


function App() {
    return (
        <>
        <Container maxWidth="sm">
        
        <Header />

        <Content />

        </Container>
        
        </>
    );
}

export default App;
