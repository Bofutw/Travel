<<<<<<< HEAD
import React from 'react'
import './blogeditor.css'



export default function BlogShow() {
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
            <div class="center">
                <div class="form-input">
                    <div class="preview">
                    <img id="file-ip-1-preview"/>
                    </div>
                    <label for="file-ip-1">Upload Image</label>
                    <input type="file" id="file-ip-1" accept="image/*" 
                    onchange={(event =>{if(event.target.files.length > 0){
                        var src = URL.createObjectURL(event.target.files[0]);
                        var preview = document.getElementById("file-ip-1-preview");
                        preview.src = src;
                        preview.style.display = "block";
                    }})}/>

                </div>
            </div> 
                {/* <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src='\images\P_20200213_120535.jpg' style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'160px', marginTop:"-50px",marginBottom:'120px',width:'900px'}}>
                    <h1>福岡之旅</h1>
                </div>
                <div>
                    <div class="leftcolumn">
                    <h2 style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                    <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <textarea id="description-61e627a8cd4644002b0b703b" name="description-61e627a8cd4644002b0b703b" type="text" style={{resize:'none',height:"200px",overflow:"scroll"}}>請輸入說明文字....</textarea>
                                
                            </div>
                            <div>
                            
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button>
                    </p>
                    <div class="leftcolumn" >
                    <h2 style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                    <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
=======
import { WindowOutlined } from '@mui/icons-material'
import React from 'react'
import './blogeditor.css'
import { useEffect } from 'react'



// "{\"beginDate\":\"2022-01-19\",\"daysNum\":4,\"eachDays\":[{\"eachPlaces\":[{\"placeName\":\"南屯國小\",\"AttractionsId\":\"ChIJ0ZMoF8k9aTQRuCDDop7t6kc\"},{\"placeName\":\"北屯國小\",\"AttractionsId\":\"ChIJHQYfVeAXaTQRnAVJXNo3vIE\"}]},{\"eachPlaces\":[{\"placeName\":\"北區醫院\",\"AttractionsId\":\"ChIJC5WkxxX2AzQRfGB1A1MRrh8\"}]},{\"eachPlaces\":[{\"placeName\":\"西屯國小\",\"AttractionsId\":\"ChIJUyVn5BgWaTQR9DFV9fYc0BY\"}]}]}"
// {"blogid":13,"blogdetail":"{\r\n    \"title\":\"集中營3日遊\",\r\n    \"decrption\":\"decrption\",\r\n    \"eachDay\":[\r\n        {\r\n            \"eachplace\":[\r\n                {\r\n                    \"subTitle\":\"集中營\",\r\n                    \"text\":\"真猶你的\",\r\n                    \"pic\":[\"\",\"\"],\r\n                    \"AttractionsId\":\"123\"\r\n                },\r\n                {\r\n                    \"subTitle\":\"毒氣室\",\r\n                    \"text\":\"..........\",\r\n                    \"pic\":[\"\",\"\"],\r\n                    \"AttractionsId\":\"7777777\"\r\n                },\r\n                {\r\n                    \"subTitle\":\"這裡超好玩\",\r\n                    \"text\":\"內文blablablablabal..........\",\r\n                    \"pic\":[\"\",\"\"],\r\n                    \"AttractionsId\":\"3\"\r\n                }\r\n            \r\n            ]                \r\n        },\r\n        {\r\n            \"eachplace\":[\r\n                {\r\n                    \"subTitle\":\"古色古香的咖啡廳\",\r\n                    \"text\":\"1111111..........\",\r\n                    \"pic\":[\"\",\"\"],\r\n                    \"AttractionsId\":\"123\"\r\n                },\r\n                {\r\n                    \"subTitle\":\"24小時營業的而且還賣滷味的家具店\",\r\n                    \"text\":\"內文blablablablabal..........\",\r\n                    \"pic\":[\"\",\"\"],\r\n                    \"AttractionsId\":\"7777777\"\r\n                },\r\n                {\r\n                    \"subTitle\":\"這裡超好玩\",\r\n                    \"text\":\"內文blablablablabal..........\",\r\n                    \"pic\":[\"\",\"\"],\r\n                    \"AttractionsId\":\"3\"\r\n                }\r\n            \r\n            ]                \r\n        },\r\n            {\r\n                \"eachplace\":[\r\n                    {\r\n                        \"subTitle\":\"古色古香的咖啡廳\",\r\n                        \"text\":\"1111111..........\",\r\n                        \"pic\":[\"\",\"\"],\r\n                        \"AttractionsId\":\"123\"\r\n                    },\r\n                    {\r\n                        \"subTitle\":\"24小時營業的而且還賣滷味的家具店\",\r\n                        \"text\":\"內文blablablablabal..........\",\r\n                        \"pic\":[\"\",\"\"],\r\n                        \"AttractionsId\":\"7777777\"\r\n                    },\r\n                    {\r\n                        \"subTitle\":\"這裡超好玩\",\r\n                        \"text\":\"內文blablablablabal..........\",\r\n                        \"pic\":[\"\",\"\"],\r\n                        \"AttractionsId\":\"3\"\r\n                    }               \r\n                ]                \r\n            }\r\n    ]\r\n}","blogauthority":0,"blogcreatetime":"2022-01-16T16:48:34.000+00:00","blogupdatetime":null,"blogpopular":7}
export default function BlogShow() {   
    let blog;
    let data ;
    function initblog(){
        blog = {};
        blog.blogauthority=0
        blog.blogdetail = {};
        blog.blogdetail.title = "";
        blog.blogdetail.decrption="";
        blog.blogdetail.eachDay=[];
        blog.blogdetail.url =""
        if(window.localStorage.blog){
            existblog();           
        }else{
            journeytoblog();
        }
    }
    useEffect(getMemberNickName,[])
    function journeytoblog(){
        data = JSON.parse(window.localStorage.journeyforblog);
        data.journeydetail = JSON.parse(data.journeydetail);
        for(let i =0;i<data.journeydetail.eachDays.length;i++){
            let tempdata ={};
            tempdata.eachplace=[];
            for(let n =0;n<data.journeydetail.eachDays[i].eachPlaces.length;n++){
                let tempObject = {};
                tempObject.subTitle=data.journeydetail.eachDays[i].eachPlaces[n].placeName
                tempObject.text="";
                tempObject.pic="";
                tempdata.eachplace.push(tempObject)
            }
            blog.blogdetail.eachDay.push(tempdata)
           
        }
        //window.localStorage.removeItem()
        console.log(blog)
        //blogdata = blog;
    }
    function existblog(){
        blog = JSON.parse(window.localStorage.blog);
        blog.blogdetail = JSON.parse(blog.blogdetail);
    }
    function changeText(e){
        if((e.target.id+"").includes("area")){          
            blog.blogdetail[(e.target.id.substr(0,e.target.id.length-4))] = e.target.value
        }else{
            let index1 = (e.target.id).slice(5,6)
            let index2 = (e.target.id).slice(6,7)       
            blog.blogdetail.eachDay[index1].eachplace[index2].text = e.target.value
        }      
    }
    function imagesave(blob,logicname){
        fetch(`https://storage.googleapis.com/upload/storage/v1/b/travelproject/o?uploadType=media&name=${logicname}.png`,{
            method:"post",
            body:blob,
            headers:new Headers({
                "Content-Type":"image/png"
            })})
            .then((res)=>{
                console.log(res)
                
            })
    }
    function save(){
        let blogdata = blog
        blogdata.blogdetail.bloger =  window.localStorage.nickName;
        blogdata.blogdetail = JSON.stringify(blogdata.blogdetail);
        if(blogdata.blogid){
            fetch(`http://localhost:8080/blog/`,{
                method:"put",
                body:JSON.stringify(blogdata),
                headers:new Headers({
                    "Content-Type":"application/json"
                })
               }).then((res)=>{
                return res.json();
               }).then((result)=>{
                    window.localStorage.blog = JSON.stringify(result);
               })
        }else{
            fetch(`http://localhost:8080/blog/member=${window.localStorage.memberid}&journey=${data.journeyid}`,{
                method:"post",
                body:JSON.stringify(blogdata),
                headers:new Headers({
                    "Content-Type":"application/json"
                })
               }).then((res)=>{
                return res.json();
               }).then((result)=>{
                   fetchdata(result.blogid)
                   
               })
        }

     }
     function fetchdata(id){
        fetch(`http://localhost:8080/blog/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((result)=>{
            console.log(result)
            window.localStorage.blog = JSON.stringify(result);
            window.location.reload();
        })
     }
     function imgchange(e){
        let url = URL.createObjectURL(e.target.files[0])
        document.getElementById((e.target.id).substr(0,e.target.id.length-5)).setAttribute("src",url)
        
        let date = new Date();
        let logicname = (e.target.id).substr(0,e.target.id.length-5)+date.toISOString();
        if((e.target.id+"").includes("topimg")){          
            blog.blogdetail.url = `https://storage.googleapis.com/travelproject/${logicname}.png`
        }else{
            
            let index1 = (e.target.id).slice(3,4)
            let index2 = (e.target.id).slice(4,5)                
            blog.blogdetail.eachDay[index1].eachplace[index2].pic = `https://storage.googleapis.com/travelproject/${logicname}.png`
        } 
        imagesave(e.target.files[0],logicname)
     }
     function getMemberNickName(){
         fetch("http://localhost:8080/member/"+window.localStorage.memberid)
         .then((res)=>{
            return res.json();
         })
         .then((resault)=>{
            window.localStorage.nickName = resault.membernickname;
         })
     }
     initblog();
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            
            <div>            
            <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <input id='topimginput' type={"file"} onChange={imgchange}></input>
                    <img id='topimg' src={blog.blogdetail.url} style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px',width:'900px'}}>
                <textarea onChange={changeText} id ="titlearea">{(blog.blogdetail.title)?blog.blogdetail.title:"為您的旅程設下一個標題...."}</textarea>
                <textarea onChange={changeText} id ="decrptionarea">{(blog.blogdetail.decrption)?blog.blogdetail.decrption:"為您的旅程增加一些描述...."}</textarea>
                </div>
                <div >
                    <div class="leftcolumn"style={{backgroundColor:'',overflow: 'auto',height:'1000px'}}>
                    <button onClick={save}>save</button>
                    {blog.blogdetail.eachDay.map((item,idex)=>{
                        let list=[];
                        for(let i = 0;i<item.eachplace.length;i++){
                            list.push(<div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  {item.eachplace[i].subTitle}</h3>                             
                                <textarea onChange={changeText} id={`index${idex}${i}`} type="text" style={{resize:'none',height:"270px",width:'615px',overflow:"scroll"}}>{item.eachplace[i].text}</textarea>
                               
                                
                            </div>
                            <div>
                            <input id={`img${idex}${i}input`} type={"file"} onChange={imgchange}></input>
                            <img id={`img${idex}${i}`} src={item.eachplace[i].pic} style={{width: '350px',height: '295px',objectFit:'cover'}}></img>
 
                            
                            </div>
                        </div>)
                        }
                        return <><h2 id={idex} style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第{idex+1}天</h2>{list}</>
                    })}                      
>>>>>>> feature/blog-mergetest0128
                    </div>
                </div>
            </div>
            <div>
            <div class="rightcolumn">
                <div class="card1">
<<<<<<< HEAD
                
                <div class="" ><img src='\img\ProfilePictureMaker.png'style={{height:"100px",width:'100px'}}/>作者:xxx</div>
                <p>個人資料的特別的話</p>
                </div>
                <div class="card1">
                <h3>旅遊目錄</h3>
                <nav>
                    <ul>
                        <li><a href="#">第一天</a></li>
                        <li><a href="#">第二天</a></li>
                        <li><a href="#">第三天</a></li>
                        <li><a href="#">....</a></li>
                        <li><a href="#">.....</a></li>
                        <li><a href="#">......</a></li>
                    </ul>
                </nav>
                </div>
                <div class="card1">
                <h3>更多熱門文章....</h3>
                <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                <br/>
                <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                <br/>
                <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                </div>
                </div> */}
=======
                <h3>旅遊目錄</h3>
                <nav>
                    <ul>
                    {blog.blogdetail.eachDay.map((item,idex)=>{
                            return <li><a href={`#${idex}`}>第{idex+1}天</a></li>
                        })}
                    </ul>
                </nav>
                </div>
                </div>
>>>>>>> feature/blog-mergetest0128
            </div>

        </div>
    )
}