import React from 'react'
import './myblog.css'



export default function BlogShow() {

    function popcard(e) {
        document.getElementById('popcard-1').setAttribute('checked','checked')   
        alert(e.target.id)     
    }
    return (

        <div >
            <div class="demo" style={{ backgroundImage: 'url("/images/563231_l.jpg")', backgroundSize: 'cover', paddingRight: '100px', height: '900px', backgroundPosition: 'center' }}>
                <h2 class="penName">我的遊記
                    <button class="button" style={{ marginLeft: '290px' }}>
                        <a href="#popup" style={{ color: "black" }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                    </button>
                </h2>

                <div class="popup" id="popup">
                    <div class="popup-inner">
                        <div style={{ marginTop: '30px' }}>
                            <h2>—撰寫遊程—</h2>
                            <p>選擇想要新增的旅遊紀錄吧</p>
                        </div>
                        <div class="popup__text">

                            <input type='radio' id="popcard-1" name='popcard' style={{display:'none'}}/> 
                                <div class="popCard" id='div-1' onClick={popcard}>
                                    <div id='div-1' class="" >
                                        <img id='div-1' src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                                    </div>
                                    <div id='div-1' class="myblog-content" style={{ padding: '10px' }}>
                                        <h5 id='div-1'>九份三天兩夜</h5>
                                    </div>
                                </div>
                            
                                                         
                            
                                <div class="popCard">
                                    <div class="" >
                                        <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                                    </div>
                                    <div class="myblog-content" style={{ padding: '10px' }}>
                                        <h5>九份三天兩夜</h5>
                                    </div>
                                </div>
                            

                            <div class="popCard">
                                <div class="" >
                                    <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                                </div>
                                <div class="myblog-content" style={{ padding: '10px' }}>
                                    <h5>九份三天兩夜</h5>
                                </div>
                            </div>
                            <div class="popCard">
                                <div class="" >
                                    <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                                </div>
                                <div class="myblog-content" style={{ padding: '10px' }}>
                                    <h5>九份三天兩夜</h5>
                                </div>
                            </div>
                            <div class="popCard">
                                <div class="" >
                                    <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                                </div>
                                <div class="myblog-content" style={{ padding: '10px' }}>
                                    <h5>九份三天兩夜</h5>
                                </div>
                            </div>
                            <div class="popCard">
                                <div class="" >
                                    <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                                </div>
                                <div class="myblog-content" style={{ padding: '10px' }}>
                                    <h5>九份三天兩夜</h5>
                                </div>
                            </div>
                            
                        </div>
                        <button style={{marginLeft:'650px',marginBottom:'13px'}}>編輯</button>
                        <a class="popup__close" href="#">X</a>
                    </div>
                </div>
                <div class="mainCard">

                    {/* <div class="mainCardHeader"></div> */}
                    <div class="mainCardContent" >

                    <lable for="popcard-1"  >九份</lable>
                        <div class="miniCard">
                            <div class="myblog-imgbox" >
                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                            </div>
                            <div class="myblog-content" style={{ padding: '10px' }}>
                                <h5>九份三天兩夜</h5>
                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                <a href="/BlogShow" class="btn btn-primary" style={{ marginLeft: '100px', marginTop: '-60px', fontSize: '12px' }}>More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        
                        <div class="miniCard">
                            <div class="myblog-imgbox" >
                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                            </div>
                            <div class="myblog-content" style={{ padding: '10px' }}>
                                <h5>九份三天兩夜</h5>
                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                <a href="/BlogShow" class="btn btn-primary" style={{ marginLeft: '100px', marginTop: '-60px', fontSize: '12px' }}>More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="miniCard">
                            <div class="myblog-imgbox" >
                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                            </div>
                            <div class="myblog-content" style={{ padding: '10px' }}>
                                <h5>九份三天兩夜</h5>
                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                <a href="/BlogShow" class="btn btn-primary" style={{ marginLeft: '100px', marginTop: '-60px', fontSize: '12px' }}>More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="miniCard">
                            <div class="myblog-imgbox" >
                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                            </div>
                            <div class="myblog-content" style={{ padding: '10px' }}>
                                <h5>九份三天兩夜</h5>
                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                <a href="/BlogShow" class="btn btn-primary" style={{ marginLeft: '100px', marginTop: '-60px', fontSize: '12px' }}>More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="miniCard">
                            <div class="myblog-imgbox" >
                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                            </div>
                            <div class="myblog-content" style={{ padding: '10px' }}>
                                <h5>九份三天兩夜</h5>
                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                <a href="/BlogShow" class="btn btn-primary" style={{ marginLeft: '100px', marginTop: '-60px', fontSize: '12px' }}>More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="miniCard">
                            <div class="myblog-imgbox" >
                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                            </div>
                            <div class="myblog-content" style={{ padding: '10px' }}>
                                <h5>九份三天兩夜</h5>
                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                <a href="/BlogShow" class="btn btn-primary" style={{ marginLeft: '100px', marginTop: '-60px', fontSize: '12px' }}>More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="miniCard">
                            <div class="myblog-imgbox" >
                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                            </div>
                            <div class="myblog-content" style={{ padding: '10px' }}>
                                <h5>九份三天兩夜</h5>
                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                <a href="/BlogShow" class="btn btn-primary" style={{ marginLeft: '100px', marginTop: '-60px', fontSize: '12px' }}>More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div class="miniCard">
                            <div class="myblog-imgbox" >
                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" style={{}} />
                            </div>
                            <div class="myblog-content" style={{ padding: '10px' }}>
                                <h5>九份三天兩夜</h5>
                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                <a href="/BlogShow" class="btn btn-primary" style={{ marginLeft: '100px', marginTop: '-60px', fontSize: '12px' }}>More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        {/* <div class="miniCard"></div>
                        <div class="miniCard"></div> */}
                    </div>
                </div>

            </div>


        </div>
    )
}