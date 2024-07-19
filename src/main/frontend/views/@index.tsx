import "../styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Index() {
    return (
        <div className="bg-light text-dark" >
            <div className="container mt-5">
                <header className="jumbotron bg-white">
                    <h1 className="display-4">Welcome to RAG Chatbot</h1>
                    <p className="lead">Harnessing the power of Retrieval Augmented Generation for dynamic conversations.</p>
                    <hr className="my-4"/>
                    <p>Our application integrates cutting-edge technology to provide accurate and contextually relevant answers by augmenting traditional generative models with a retrieval component. Explore how RAG enhances chatbot interactions to deliver a superior user experience.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Start Chatting</a>
                </header>
                <br/>


                <div className="row">
                    <div className="col-md-6">
                        <div className="card bg-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Watch a Demo</h5>
                                <p className="card-text">See the Retrieval Augmented Generation (RAG) chatbot in action. Watch our detailed walkthrough on YouTube.</p>
                                <a href="https://www.youtube.com/watch?v=OoaxVk9PoCw" target="_blank" className="btn btn-primary">Watch Video</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-white mb-4">
                            <div className="card-body">
                                <h5 className="card-title">View on GitHub</h5>
                                <p className="card-text">Explore the source code of our RAG-based chatbot project. Get involved by contributing or cloning the repository for your own use.</p>
                                <a href="https://github.com/yourusername/yourprojectname" target="_blank" className="btn btn-primary">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}