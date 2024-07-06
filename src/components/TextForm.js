import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value); // Store the value of the text area in 'text'
    };

    const upCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length===0){
            props.showAlert("Enter a Text", "warning");
        }
        else{
            props.showAlert("Text has been converted to Uppercase", "success");
        }
    };

    const loCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length===0){
            props.showAlert("Enter a Text", "warning");
        }
        else{
            props.showAlert("Text has been converted to Lowercase", "success");
        }
    };

    const clearBtn = () => {
        setText("");
        if(text.length===0){
            props.showAlert("Enter a Text", "warning");
        }
        else{
            props.showAlert("Text Cleared", "success");
        }
    };

    //For PC Only

    // const copyToClipboard = () => {
    //     navigator.clipboard.writeText(text);
    //     if(text.length===0){
    //         props.showAlert("Enter a Text", "warning");
    //     }
    //     else{
    //         props.showAlert("Copied to Clipboard", "success");
    //     }
    // };

    //For both the Mobile and PC

    const copyToClipboard = () => {
        const fallbackCopyToClipboard = (text) => {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                props.showAlert("Copied to Clipboard", "success");
            } catch (err) {
                props.showAlert("Failed to copy text", "danger");
            }
            document.body.removeChild(textArea);
        };
    
        if (text.length === 0) {
            props.showAlert("Enter a Text", "warning");
        } else {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(
                    () => {
                        props.showAlert("Copied to Clipboard", "success");
                    },
                    (err) => {
                        fallbackCopyToClipboard(text);
                    }
                );
            } else {
                fallbackCopyToClipboard(text);
            }
        }
    };
    
    return (
        <div className='container my-3' style={{ color: props.mode === 'black' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control" value={text} id="floatingTextarea2" onChange={handleOnChange} style={{ height: '300px', color: props.mode === 'black' ? 'white' : 'black', backgroundColor: props.mode === 'black' ? '#091723' : 'white', borderColor: props.mode === 'black' ? 'white' : 'black'}}></textarea>
                {/* here style is an object that's why we put 2 curly brackets
                <label htmlFor="floatingTextarea2">Enter your Text here</label> */}
            </div>
            <div className="container my-3">
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={upCase}>Change to UpperCase</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={loCase}>Change to LowerCase</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={clearBtn}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy to Clipboard</button>
            </div>
            <div className="container">
                <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} Minutes will take to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
