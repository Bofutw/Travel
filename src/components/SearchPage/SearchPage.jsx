import { width } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './SearchPage.css'





function Blog() {
    // let temp = 0
    // const [populardata, setPopulardata] = useState([])
    // const [newblogdata, setNewblogdata] = useState([])
    // useEffect((() => {
    //     getPopularData()
    //     getNewblogData()
    // }),
    //     [])
    // function getPopularData() {
    //     fetch("http://localhost:8080/blog/topblog")
    //         .then((res) => {

    //             return res.json()
    //         })
    //         .then((result) => {

    //             for (let i = 0; i < result.length; i++) {
    //                 console.log(result[i].blogdetail)
    //                 result[i].blogdetail = JSON.parse(result[i].blogdetail)
    //             }
    //             console.log(result)
    //             setPopulardata(result)
    //         })

    // }
    // function getNewblogData() {
    //     fetch("http://localhost:8080/blog/newblog")
    //         .then((res) => {

    //             return res.json()
    //         })
    //         .then((result) => {

    //             for (let i = 0; i < result.length; i++) {
    //                 console.log(result[i].blogdetail)
    //                 result[i].blogdetail = JSON.parse(result[i].blogdetail)
    //             }
    //             console.log(result)
    //             setNewblogdata(result)
    //         })

    // }
    // function test(e) {
    //     fetch("http://localhost:8080/blog/" + (e.target.id).slice(6, 8))
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((result) => {
    //             window.localStorage.blogdata = JSON.stringify(result)
    //             window.location.href = "/Blogshow"

    //         })
    // }
    return (
        <div style={{ backgroundImage: 'url("/images/AnyConv.com__E_US5SHVQAIuSbE.jpg")', backgroundSize: '100% 100%', height: '1400px' }}>
            <div style={{ display: 'grid', gridTemplateRows: '20% 80% ' }}>
                <div style={{ marginTop: '160px', marginLeft: '340px', zIndex: '3' }}>
                    <h1 style={{ fontWeight: 'bold' }}><i class="fa fa-search" aria-hidden="true"></i>    搜尋：台中</h1>
                    <h3>包含 " 台中 " 的相關結果：</h3>

                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '75% 25% ', backgroundImage: 'url("")', backgroundSize: '100% 100%' }}>
                    {/* <div></div> */}
                    <div style={{ paddingBottom: '10px',overflow:'scroll',resize:'none',height:'1040px' }}>
                        <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)' }}></div>
                                {/* `url(${item.blogdetail.url})` */}
                                <ul class="details">
                                    <li class="author">John Doe</li>
                                    <li class="date">2022 / 1 / 24</li>

                                </ul>
                            </div>
                            <div class="description">
                                <h1 style={{ width: '388px', height: '60px' }}>九份三天兩夜</h1>
                                {/* {item.blogdetail.title} / {item.blogdetail.decrption} / <a onClick={test} id={`blogid${item.blogid}`}>Read More</a> */}
                                <p style={{ width: '388px', height: '40px' }}> 平溪放天燈</p>
                                <p class="read-more">
                                    <a >Read More</a>
                                </p>
                            </div>

                        </div>
                        <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)' }}></div>
                                {/* `url(${item.blogdetail.url})` */}
                                <ul class="details">
                                    <li class="author">John Doe</li>
                                    <li class="date">2022 / 1 / 24</li>

                                </ul>
                            </div>
                            <div class="description">
                                <h1 style={{ width: '388px', height: '60px' }}>九份三天兩夜</h1>
                                {/* {item.blogdetail.title} / {item.blogdetail.decrption} / <a onClick={test} id={`blogid${item.blogid}`}>Read More</a> */}
                                <p style={{ width: '388px', height: '40px' }}> 平溪放天燈</p>
                                <p class="read-more">
                                    <a >Read More</a>
                                </p>
                            </div>

                        </div>
                        <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)' }}></div>
                                {/* `url(${item.blogdetail.url})` */}
                                <ul class="details">
                                    <li class="author">John Doe</li>
                                    <li class="date">2022 / 1 / 24</li>

                                </ul>
                            </div>
                            <div class="description">
                                <h1 style={{ width: '388px', height: '60px' }}>九份三天兩夜</h1>
                                {/* {item.blogdetail.title} / {item.blogdetail.decrption} / <a onClick={test} id={`blogid${item.blogid}`}>Read More</a> */}
                                <p style={{ width: '388px', height: '40px' }}> 平溪放天燈</p>
                                <p class="read-more">
                                    <a >Read More</a>
                                </p>
                            </div>

                        </div>
                        <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)' }}></div>
                                {/* `url(${item.blogdetail.url})` */}
                                <ul class="details">
                                    <li class="author">John Doe</li>
                                    <li class="date">2022 / 1 / 24</li>

                                </ul>
                            </div>
                            <div class="description">
                                <h1 style={{ width: '388px', height: '60px' }}>九份三天兩夜</h1>
                                {/* {item.blogdetail.title} / {item.blogdetail.decrption} / <a onClick={test} id={`blogid${item.blogid}`}>Read More</a> */}
                                <p style={{ width: '388px', height: '40px' }}> 平溪放天燈</p>
                                <p class="read-more">
                                    <a >Read More</a>
                                </p>
                            </div>

                        </div>
                        <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)' }}></div>
                                {/* `url(${item.blogdetail.url})` */}
                                <ul class="details">
                                    <li class="author">John Doe</li>
                                    <li class="date">2022 / 1 / 24</li>

                                </ul>
                            </div>
                            <div class="description">
                                <h1 style={{ width: '388px', height: '60px' }}>九份三天兩夜</h1>
                                {/* {item.blogdetail.title} / {item.blogdetail.decrption} / <a onClick={test} id={`blogid${item.blogid}`}>Read More</a> */}
                                <p style={{ width: '388px', height: '40px' }}> 平溪放天燈</p>
                                <p class="read-more">
                                    <a >Read More</a>
                                </p>
                            </div>

                        </div>
                        <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)' }}></div>
                                {/* `url(${item.blogdetail.url})` */}
                                <ul class="details">
                                    <li class="author">John Doe</li>
                                    <li class="date">2022 / 1 / 24</li>

                                </ul>
                            </div>
                            <div class="description">
                                <h1 style={{ width: '388px', height: '60px' }}>九份三天兩夜</h1>
                                {/* {item.blogdetail.title} / {item.blogdetail.decrption} / <a onClick={test} id={`blogid${item.blogid}`}>Read More</a> */}
                                <p style={{ width: '388px', height: '40px' }}> 平溪放天燈</p>
                                <p class="read-more">
                                    <a >Read More</a>
                                </p>
                            </div>

                        </div>
                        <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)' }}></div>
                                {/* `url(${item.blogdetail.url})` */}
                                <ul class="details">
                                    <li class="author">John Doe</li>
                                    <li class="date">2022 / 1 / 24</li>

                                </ul>
                            </div>
                            <div class="description">
                                <h1 style={{ width: '388px', height: '60px' }}>九份三天兩夜</h1>
                                {/* {item.blogdetail.title} / {item.blogdetail.decrption} / <a onClick={test} id={`blogid${item.blogid}`}>Read More</a> */}
                                <p style={{ width: '388px', height: '40px' }}> 平溪放天燈</p>
                                <p class="read-more">
                                    <a >Read More</a>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div >
                            <div style={{ width: '300px', height: '340px', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '5px', marginTop: '15px' }}>
                                <div style={{ paddingTop: "15px", color: 'white', paddingLeft: '35px', marginBottom: '20px' }}>
                                    <h4><i class="fa fa-address-book-o" aria-hidden="true" style={{ marginRight: '15px' }}></i>熱門作家</h4>
                                </div>
                                <ul class="details">
                                    <li class="" style={{ height: '90px' }}><img src='\img\ProfilePictureMaker.png' style={{ width: '60px', height: '60px', marginLeft: '20px' }} />
                                        <ul style={{ marginLeft: '100px', marginTop: '-63px', marginRight: '20px' }}>
                                            <li style={{ color: 'white', fontWeight: 'bold', fontSize: "18px" }}>Raven</li>
                                            <li id='detail-member-intro' >個人資料的話個人資料的話個人資料的話個人資料的話個人資料的話</li>
                                        </ul>
                                    </li>
                                    <li class="" style={{ height: '90px' }}><img src='\img\ProfilePictureMaker (3).png' style={{ width: '60px', height: '60px', marginLeft: '20px' }} />
                                        <ul style={{ marginLeft: '100px', marginTop: '-60px' }}>
                                            <li style={{ color: 'white', fontWeight: 'bold', fontSize: "18px" }}>Bofu</li>
                                            <li style={{ color: 'white' }}>個人資料的話</li>
                                        </ul>
                                    </li>
                                    <li class="" style={{ height: '90px' }}><img src='\img\ProfilePictureMaker (4).png' style={{ width: '60px', height: '60px', marginLeft: '20px' }} />
                                        <ul style={{ marginLeft: '100px', marginTop: '-60px' }}>
                                            <li style={{ color: 'white', fontWeight: 'bold', fontSize: "18px" }}>Mike</li>
                                            <li style={{ color: 'white' }}>個人資料的話</li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div >
                            <div style={{ width: '300px', height: '650px', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '5px', marginTop: '15px' }}>
                                <div style={{ paddingTop: "15px", color: 'white', paddingLeft: '35px', marginBottom: '30px' }}>
                                    <h4><i class="fa fa-star" aria-hidden="true" style={{ marginRight: '15px' }}></i>熱門文章</h4>
                                </div>
                                <ul class="details">
                                    <li class="" style={{ height: '110px',marginBottom:'70px' }}>
                                        <div class="blog-card"style={{height: '160px',width:'260px'}}>
                                            <div class="meta">
                                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)',height: '160px',width:'260px' }}></div>
                                                {/* `url(${item.blogdetail.url})` */}
                                                <ul class="details" style={{height: '160px',width:'105px'}}>
                                                    <li class="author">Raven</li>
                                                    <li class="date">2022 / 1 / 24</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="" style={{ height: '110px',marginBottom:'70px' }}>
                                        <div class="blog-card"style={{height: '160px',width:'260px'}}>
                                            <div class="meta">
                                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)',height: '160px',width:'260px' }}></div>
                                                {/* `url(${item.blogdetail.url})` */}
                                                <ul class="details" style={{height: '160px',width:'105px'}}>
                                                    <li class="author">Raven</li>
                                                    <li class="date">2022 / 1 / 24</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="" style={{ height: '110px',marginBottom:'70px' }}>
                                        <div class="blog-card"style={{height: '160px',width:'260px'}}>
                                            <div class="meta">
                                                <div class="photo" style={{ backgroundImage: 'url(/images/P_20200213_161933.jpg)',height: '160px',width:'260px' }}></div>
                                                {/* `url(${item.blogdetail.url})` */}
                                                <ul class="details" style={{height: '160px',width:'105px'}}>
                                                    <li class="author">Raven</li>
                                                    <li class="date">2022 / 1 / 24</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Blog;


{/* <form style={{ background: 'radial-gradient(ellipse at center,gray,lightgray)', width: '380px', height: '250px', Filter: 'blur(20px)', borderRadius: '5px' }}>
    <div style={{ width: '380px', height: '250px', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '5px' }}>
        <div style={{ paddingTop: "45px", color: 'white', paddingLeft: '45px' }}>
            <h4><i class="fa fa-map-marker" aria-hidden="true"></i>     地區 </h4>
        </div>
        <div class="center">
            <select name="sources" id="sources" class="custom-select sources" placeholder="Source Type" style={{ width: '255px', marginLeft: '180px', marginTop: '-80px' }}>
                <option value="profile">Profile</option>
                <option value="word">Word</option>
                <option value="hashtag">Hashtag</option>
            </select>
        </div>

        <div style={{ paddingTop: "5px", color: 'white', paddingLeft: '45px' }}>
            <h4><i class="fa fa-map-o" aria-hidden="true"></i>     類型 </h4>
        </div>
        <div class="center">
            <select name="sources" id="sources" class="custom-select sources" placeholder="Source Type" style={{ width: '255px', marginLeft: '180px', marginTop: '-80px' }}>
                <option value="profile">Profile</option>
                <option value="word">Word</option>
                <option value="hashtag">Hashtag</option>
            </select>
        </div>

        <a href="/" class="bn3">Button</a>


    </div>
</form>  */}