import React, { useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

import './favorite.css'

let memberid =window.localStorage.memberid
const Favorite = () => {

    const [data, setData] = useState([]);

    function fetchData(){
        fetch("http://localhost:8080/blog/memberid="+memberid)
        .then((res)=>{
          return res.json();
        })
        .then((result)=>{
          console.log(result)
          setData(result)
      }
    
      )
    }
    useEffect(fetchData,[]);
    return (
        <div >
        {/* <div>
            <h1>收藏頁面</h1>
        </div> */}
        <div style={{paddingLeft:'250px',paddingTop:'120px',paddingBottom:'250px',display:"flex"}}>
       
            <div class="cover">
                 
            <div class="book">
               
            <label for="page-1"  class="book__page book__page--1">
                <img src="\img\pexels-photo-1717937.jpeg" alt=""/>
            </label>
            
            <label for="page-2"  class="book__page book__page--4">
                <div class="page__content" id='bloglist'>
                {/* <h1 class="page__content-title">I</h1> */}
                <ul class='favorite' >
                

                {
                    data.map((item,index)=>{
                        let test = JSON.parse(item.blogdetail).title;
                        return(
                            <>
                            {/* <li>
                                <a href='#'><h3>{test}</h3></a>
                                
                                {JSON.parse(item.blogdetail).decrption}
                                <br></br> <br></br>
                            </li> */}
                             <Zoom in='true' timeout={(index+6)*1000}>
                             <Card sx={{ maxWidth: 345 , marginBottom: 3}}>
                             <CardMedia
                               component="img"
                               alt=""
                               height="140"
                               image= {JSON.parse(item.blogdetail).url}
                             />
                             <CardContent>
                               <Typography gutterBottom variant="h5" component="div">
                               {test}
                               </Typography>
                               <Typography variant="body2" color="text.secondary">
                               {JSON.parse(item.blogdetail).decrption}
                               </Typography>
                             </CardContent>
                             <CardActions>
                               <Button size="small">Share</Button>
                               <Button size="small">Learn More</Button>
                             </CardActions>
                           </Card>
                           </Zoom>
                           </>   
                        )
                    })
                }
                  {/*   <li><a href='https://github.com/EEIT36-Travel'>星期一二三</a></li>
                    <li>星期二三四五六</li>
                    <li>星期一四五</li>
                    <li>星期二</li> */}
              
                 
                    
                    
                </ul>
                {/* <div class="page__content-blockquote">
                    <p class="page__content-blockquote-text"><a href='https://codepen.io/pascaloliv/pen/LVZaeE'>HARI SELDON — . . . born in the 11,988th year of  </a></p>
                    <p class="page__content-blockquote-text">. . . Undoubtedly his greatest contributions were in the field of psychohistory. Seldon found the field little more than a set of vag </p>
                    <p class="page__content-blockquote-text">. . . The best existing authority we have for the details of his life is the biography written by Gaal Dornick who, as a young </p>
                    <span class="page__content-blockquote-reference">Encyclopedia Galactica*</span>
                </div>
                <div class="page__content-text">
                    <p>His name was Gaal Dornick and he wa </p>
                    <p>There were nearly twenty-five million i </p>
                    <p>To Gaal, this trip was the undoub </p>
                </div> */}
                
                </div>
                
            </label>
                
             {/* Resets the page  */}
            <input type="radio" name="page" id="page-1"/>
                
             {/* Goes to the second page  */}
            <input type="radio" name="page" id="page-2"/>

            <label class="book__page book__page--2">
                <div class="book__page-front">
                    <div class="page__content1">
                        <h1 class="page__content1-book-title">旅遊收藏</h1>
                        <h2 class="page__content1-author">Travel Memory</h2>                   
                        <p class="page__content1-credits">
                        <span><i class="fa fa-pencil" aria-hidden="true"></i>  收集來自不同人的回憶</span>
                        </p>                    
                        <p class="page__content1-credits">                    
                        <span><i class="fa fa-pencil" aria-hidden="true"></i>  留下令你心動的場景</span>
                        </p>                    
                    </div>
                </div>
                <div class="book__page-back"style={{backgroundImage: 'url("/img/20210407060720899.jpg")',backgroundSize:'100% 100%'}}/>
            </label>
            </div>
            </div>           
        </div>
        </div>
    );
}

export default Favorite;
