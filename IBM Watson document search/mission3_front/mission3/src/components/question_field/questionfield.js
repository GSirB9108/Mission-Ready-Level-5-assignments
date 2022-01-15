import React from 'react'
import { useState } from 'react';

export default function Questionfield() {

    const [user_input, setuser_input] = useState('');
    const [responses, setresponses] = useState([]);
    const [noanswer, setnoanswer] = useState('')

    /* const handleUserInput = (e) => {
        //setuser_input(e.target)
        //console.log(e.target.value)
        setuser_input(e.target.value)
    } */

    const handleQuerySubmit = (e) => {
        //console.log('you clicked')
        removepunc(user_input);
        //console.log(user_input);
        
    }

    const removepunc=(word) => {
        let wordstr=word;
        wordstr= wordstr.replace(/[^a-zA-Z ]/g," ");
    
        while(wordstr.charAt(0) === ' ')
        {wordstr = wordstr.substring(1);}
        
        setuser_input(wordstr);
    
        makeAPICall(wordstr);
        
        return wordstr;
    }
    

    const makeAPICall=(userinput) => {
        fetch('http://localhost:4000/query', {
            method: "POST",
            body: JSON.stringify({
                query:userinput
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        // Converting to JSON
        .then(response => response.json())
 
        // Displaying results to console
        .then(json => {
            //console.log(json);
            //if json not empty, then set responses. if empty, have to do a lil something.
            if(json.length > 0){
            setresponses(json);
            setnoanswer('');
            }

            else {
                console.log('no response');
                setnoanswer(`Sorry, no responses with "${userinput}". Try again with a different question!`)
                setresponses([]);
            }
        });
        }
    

    return (
        <div>
            <img src="turners/turners_logo.png" alt="logo" />
            <h1>Turners insurance document search</h1>
            <h2>Ask about the Turners insurance document in the box below, and we'll show you the snippets that we think are the most relevant to your question.</h2>

            <input type='text' onChange={(e) => setuser_input(e.target.value)}></input>
            <button onClick={handleQuerySubmit}>Submit Query</button>

            <div className='display_response'>
                {responses.map(response=> (
                    <div className='each_resp'>
                        <p>{response.passage_text}</p>
                    </div>
                )
                )
                }
            </div>

            <div className='no_answer'>
                {noanswer}
            </div>
        </div>
    )
}
