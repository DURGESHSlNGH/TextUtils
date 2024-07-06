import React from 'react'

export default function About(props) {

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '50px'
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '500px',  // Adjust this width as needed
        margin: '0 auto'  // Centers the container
    };

    return (
        <div>
            <div className="accordion" id="accordionExample" style={{ color: props.mode === 'black' ? 'white' : 'black' }}>
                <h1 className='my-3'>{props.title}</h1>
                <div className="accordion-item" style={{ color: props.mode === 'black' ? 'white' : 'black', backgroundColor: props.mode === 'black' ? '#091723' : 'white' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: props.mode === 'black' ? 'white' : 'black', backgroundColor: props.mode === 'black' ? '#091723' : 'white' }}>
                            <strong>About TextUtils</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p> TextUtils is a text utility app that provides various features for text manipulation and analysis. You can use it to convert text to uppercase, lowercase, clear text, count characters, count words, and more.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'black' ? 'white' : 'black', backgroundColor: props.mode === 'black' ? '#091723' : 'white' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: props.mode === 'black' ? 'white' : 'black', backgroundColor: props.mode === 'black' ? '#091723' : 'white' }}>
                            <strong>About the Technology</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>TextUtils is built using the MERN stack (MongoDB, Express.js, React, Node.js). This powerful combination allows for creating robust and dynamic web applications.
                                The app leverages the flexibility of React for building the user interface, the scalability of MongoDB for the database, and the efficiency of Node.js and Express.js for the backend server.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'black' ? 'white' : 'black', backgroundColor: props.mode === 'black' ? '#091723' : 'white' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: props.mode === 'black' ? 'white' : 'black', backgroundColor: props.mode === 'black' ? '#091723' : 'white' }}>
                            <strong>Social Media Links</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div style={containerStyle}>
                                <a href="https://www.linkedin.com/in/durgesh-10-singh/" target="_main" style={linkStyle} aria-label="LinkedIn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/durgesh_10_singh/" target="_main" style={linkStyle} aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=GTvVlcRwRCVRxJqslfkMBnfRvQZkcstzvtMshHxsxVnvqtQJhbJgzPKpKSnjPBWBwCvVScqrKjvSM" target="_main" style={linkStyle} aria-label="Email">
                                    <i className="fas fa-envelope"></i>
                                </a>
                                <a href="https://github.com/DURGESHSlNGH" target="_main" style={linkStyle} aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
