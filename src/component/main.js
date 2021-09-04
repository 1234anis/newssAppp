import React,{useState,useEffect} from 'react';
import './style.css';
const Main = () => {
    const[articles,setArticle]=useState([]);
    const[search,setSearch]=useState("Apple");

    useEffect(()=>{
        searchNews();
        
    },[]);

    const readValue=(value)=>{
     setSearch(value);
    }
    const searchNews=()=>{
        const url=`https://newsapi.org/v2/everything?q=${search}&apiKey=aae68af0b31246698ac1bf3ba6f12a69`;
        fetch(url).then((res)=>res.json()).then((data)=>{
        setArticle(data.articles);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className="container">
            <div className="padd">
            <div className="filter">
                <input type="search"  placeholder="Enter Topic to Search" onChange={(e)=>readValue(e.target.value)}/>
                <button className="btn" onClick={searchNews}>Search For News</button>
            </div>
            <h1>All News</h1>
            {

                // articles.length===0?(<h1>No Data Found</h1>):
            articles.map((article,index)=>(
            <div key={index} className="article">

                <div className="padd-article">
                    <div className="news-img">
                    <img src={article.urlToImage} alt="news-img" /> </div>
                    <div className="news-details"> 
                    <h2>{article.title}</h2>
                    <p>{article.author}</p> 
                    <p>{article.description}</p>
                    <p>
                    <a href={article.url} target="blank">
                        <button className="btn">Read Full Article</button> </a>
                    </p>
                    </div>
                </div>
            </div>
            ))
            }
            </div>
        </div>
    )
}

export default Main;
