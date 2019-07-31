import React, {useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from './PhotoCard';

export default function PhotoList(){
    const [img, setImg] = useState(null)
    const [date, setDate] = useState(null)
    const [title, setTitle] = useState(null)
    const [expl , setExpl] = useState(null)
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=JppcliqRSl68SHzx9FNy4nunp4NRMjOjP7Bj7AOX")
    .then(input =>{
        const apiData = input.data;
        setTitle(apiData.title);
        setImg(apiData.url)
        setDate(apiData.date)
        setExpl(apiData.explanation)
        
    })
    },[date])
    
    return(
    <div>
        <PhotoCard img={img} date={date} title={title} expl={expl} />
    </div>
    );
}