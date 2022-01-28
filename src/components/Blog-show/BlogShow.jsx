import React ,{useEffect,useState} from 'react'
import './blogshow.css'


import Button from '@mui/material/Button';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';


export default function BlogShow() {
    let blogdata ;
    
     blogdata = JSON.parse(window.localStorage.blogdata);
     blogdata.blogdetail = JSON.parse(blogdata.blogdetail);
     const [populardata,setPopulardata] = useState([]);
     const [collectstatus,setCollectstatus] = useState([]);
     const [collectid,setCollectid] = useState();
     
    

    useEffect(()=>{
        getPopularData();
        collectStatusCheck();
    },[]);
     function getPopularData(){
        fetch("http://localhost:8080/blog/topblog")
        .then((res)=>{
            
            return res.json()
        })
        .then((result)=>{
            
            for(let i =0;i<result.length;i++){
                console.log(result[i].blogdetail)
                result[i].blogdetail = JSON.parse(result[i].blogdetail)
            }
            console.log(result)
            setPopulardata(result)
        })
    }
    function toBlogPage(e){
       
        fetch("http://localhost:8080/blog/"+(e.target.id).slice(6,8))
        .then((res)=>{          
           
            return res.json()
        })
        .then((result)=>{
            window.localStorage.blogdata = JSON.stringify(result)
            window.location.href = "/Blogshow"
 
        })
    }
    function collectStatusCheck(){
        fetch(`http://localhost:8080/collect/status/memberid=${window.localStorage.memberid}&blogid=${JSON.parse(window.localStorage.blogdata).blogid}`)
        .then((res)=>{
            return res.json()
        })
        .then((result)=>{
            
            window.localStorage.collectid = result[1];
            setCollectstatus(result[0]) ;
        })

    }
    function insertCollect(){
        fetch(`http://localhost:8080/collect/memberid=${window.localStorage.memberid}&blogid=${JSON.parse(window.localStorage.blogdata).blogid}`,
        {
            method:"POST"

        })
        .then((res)=>{
            
            return res.json();
            
        }).then((result)=>{
           
            window.localStorage.collectid = result.collectid
            window.location.reload();
        })
        
    } 
    function deleteCollect(){
        fetch(`http://localhost:8080/collect/${window.localStorage.collectid}`,{
            method:"DELETE"
        })
        .then((res)=>{
            window.location.reload();

        })

    }
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
                <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src={blogdata.blogdetail.url} style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px',width:'900px'}}>
                    <h1>{blogdata.blogdetail.title}</h1>
                    <h5 style={{overflow:'clip'}}>{blogdata.blogdetail.decrption}</h5>
                </div>
                <Button color={collectstatus?'warning':'success'} sx={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px'}} onClick={collectstatus?deleteCollect:insertCollect} variant="outlined" startIcon={collectstatus?<BookmarkRemoveIcon/> : <BookmarkAddIcon />}>
                {collectstatus?"取消收藏":"收藏"}
                </Button>
                {/* { <button style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px'}} onClick={collectstatus?deleteCollect:insertCollect}>{collectstatus?"取消收藏":"收藏"}</button> } */}
               
                <div >
                    <div class="leftcolumn"style={{backgroundColor:'',overflow: 'auto',height:'1000px'}}>
                        
                    {blogdata.blogdetail.eachDay.map((item,idex)=>{
                        let list=[];
                        for(let i = 0;i<item.eachplace.length;i++){
                            if(i%2==0){
                            list.push(<div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  {item.eachplace[i].subTitle}</h3>
                                <p id='blogshowcard-p'> {item.eachplace[i].text}</p>
                                
                            </div>
                            <div>
                            <img src={item.eachplace[i].pic} style={{width:'300px',height:'300px'}}></img>
                            </div>
                        </div>)
                        }else{
                            list.push(<div class="card"style={{display: 'grid',gridTemplateColumns:'35% 65%'}}>
                             <div>
                            <img src={item.eachplace[i].pic} style={{width:'300px',height:'300px',justifyItems:'end'}}></img>
                            </div>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  {item.eachplace[i].subTitle}</h3>
                                <p id='blogshowcard-p'> {item.eachplace[i].text}</p>
                            </div>
                           
                        </div>)
                        }
                        }
                        return <><h2 id={idex} style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第{idex+1}天</h2>{list}</>
                        



                    })}
                    </div>
                    
                </div>
            </div>
            <div>
            <div class="rightcolumn">
                <div class="card1">
                
                <div class="" ><img alt="Avatar" src={blogdata.membericon}style={{height:"100px",width:'100px',"border-radius": "50%"}}/>{` 作者:${blogdata.membernickname}`}</div>
                <br/>
                <p>{blogdata.memberintro}</p>
                </div>
                <div class="card1">
                <h3>旅遊目錄</h3>
                <nav>
                    <ul>
                        {blogdata.blogdetail.eachDay.map((item,idex)=>{
                            return <li><a href={`#${idex}`}>第{idex+1}天</a></li>
                        })}
 
                    </ul>
                </nav>
                </div>
                <div class="card1">
                <div style={{ width: '300px', height: '650px', backgroundColor: 'rgba(161,228,241,0.6)', borderRadius: '5px', marginTop: '15px' }}>
                                <div style={{ paddingTop: "15px", color: 'black', paddingLeft: '35px', marginBottom: '30px' }}>
                                    <h4><i class="fa fa-star" aria-hidden="true" style={{ marginRight: '15px' }}></i>熱門文章</h4>
                                </div>
                                <ul class="details">
                                    {populardata.map((item,id)=>{
                                        if(id<3){
                                            return <li onClick={toBlogPage}class="" style={{ height: '110px', marginBottom: '70px',cursor: 'pointer' }} >
                                            <div class="blog-card" style={{ height: '160px', width: '260px' }}>
                                                <div class="meta">
                                                    <div id={`blogid${item.blogid}`} class="photo" style={{ backgroundImage: `url(${item.blogdetail.url})`, height: '160px', width: '260px' }}></div>
                                                    {/* `url(${item.blogdetail.url})` */}
                                                    <ul id={`blogid${item.blogid}`} class="details" style={{ height: '160px', width: '105px' }}>
                                                        <li class="fa fa-pencil" id={`blogid${item.blogid}`}>     {item.blogdetail.title}</li>
                                                        <li class="date" id={`blogid${item.blogid}`}>{item.blogcreatetime.slice(0,10)}</li>
    
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        }

                                    })}

                                </ul>

                            </div>
                </div>
                </div>
            </div>

        </div>
    )
}





