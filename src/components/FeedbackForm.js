import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [club, setClub] = useState('');
    const [comments, setComments] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/feedback', { name, email, club, comments })
            .then((res) => {
                alert(res.data);
                setSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    const styles = {
        container: {
            width: '100%',
            maxWidth: '500px',
            margin: '50px auto',
            padding: '20px',
            border: '1px solid rgb(188, 16, 16)',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
        title: {
            color: 'rgb(188, 16, 16)',
            fontSize: '24px',
            marginBottom: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        input: {
            width: '95%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            transition: 'border-color 0.3s ease',
        },
        textarea: {
            width: '95%',
            height: '100px',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            resize: 'none',
            transition: 'border-color 0.3s ease',
        },
        button: {
            backgroundColor: 'rgb(188, 16, 16)',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            fontSize: '18px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        successMessage: {
            color: 'green',
            fontSize: '20px',
            margin: '20px 0',
        },
        homeButton: {
            backgroundColor: 'rgb(188, 16, 16)',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            fontSize: '18px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
    };

    return (
        <div style={styles.container}>
            {!submitted ? (
                <>
                    <h2 style={styles.title}>Submit Feedback</h2>
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            style={styles.input}
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            style={styles.input}
                            placeholder="Club"
                            value={club}
                            onChange={(e) => setClub(e.target.value)}
                            required
                        />
                        <textarea
                            style={styles.textarea}
                            placeholder="Comments"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            style={styles.button}
                        >
                            Submit
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <p style={styles.successMessage}>Feedback submitted successfully!</p>
                    <button
                        style={styles.homeButton}
                        onClick={() => window.location.href = '/homepage'}
                    >
                        Back
                    </button>
                </>
            )}
        </div>
    );
}

export default FeedbackForm;
