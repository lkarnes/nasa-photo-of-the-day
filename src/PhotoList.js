import React, {useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from './PhotoCard';
export default function PhotoList(){
    const [url, setUrl] = useState(null)
    const [date, setDate] = useState(null)
    const [title, setTitle] = useState(null)
    const [explan , setExpl] = useState(null)
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=JppcliqRSl68SHzx9FNy4nunp4NRMjOjP7Bj7AOX${dateInput}`)
    .then(input =>{
        const apiData = input.data;
        setTitle(apiData.title);
        setUrl(apiData.url)
        setDate(apiData.date)
        setExpl(apiData.explanation)
    })
    .catch((err)=>{
        console.log(err)
    })
    },[date])
    const [dateBox, setDateBox] = useState('')
    const dateInput = `&date=${dateBox}`;
    function runDate(){

    }
    return(
    <div>
        <form>
            <label>Enter a Date </label>
            <input onChange={input=>runDate(input.target.value)}id="date" type="date" value={dateBox}/>
            <input type='submit'/>
        </form>
        <PhotoCard image={url} dt={date} ttl={title} expl={explan} />
    </div>
    );
}