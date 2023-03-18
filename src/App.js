import Header from "./Component/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import FeedbackList from "./Component/FeedbackList"
import FeedbackStats from "./Component/FeedbackStats"
import FeedbackForm from "./Component/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./Component/AboutIconLink"
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />   
                        </>
                    }></Route>

                    <Route path="/about" element={<AboutPage />}/>
                </Routes>   
                <AboutIconLink />  
            </div>
        </Router>
        </FeedbackProvider>
    )
}
export default App