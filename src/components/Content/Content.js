import React from   'react';
import Advertisement from '../Advertisement/Advertisement';
import Header from '../Header/Header';
import {BsTwitter, BsFacebook, BsLinkedin} from "react-icons/bs";
import FeaturedNews1 from "../../images/featurednews1.jpg";
import "./Content.css";

const Content = () => {
    return (
        <>
            <Header />
            <Advertisement />

            <section className="detailed-content">
                <div className="container">
                    <div className="detailed-content__container">
                        <h3>Martinez trains as Reds prepare for La Real</h3>
                                
                        <div className="detailed-content__sub-header">
                            <div className="detailed-content__sub-header-left">
                                <h4>Josh Weldon</h4>
                                <p>20 comments</p>
                            </div>

                            <div className="detailed-content__sub-header-right">
                                <ul className="detailed-content__social-media">
                                    <li>
                                        <a href="#"><BsFacebook /></a>
                                    </li>
                                    <li>
                                        <a href="#"><BsLinkedin /></a>
                                    </li>
                                    <li>
                                        <a href="#"><BsTwitter /></a>
                                    </li>
                                </ul>
                                <p>5 September 2022</p>
                            </div>
                        </div>

                        <div className="detailed-content__img-container">
                            <img src={FeaturedNews1} alt="featured news 1" />
                        </div>

                        <div className="detailed-content__body">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        </div>

                        <div className="detailed-content__comment">
                            <p>Comment</p>
                            <textarea 
                                id="comment" 
                                name="comment" 
                                rows="5" 
                                cols="10"
                                placeholder="What are your thoughts?"
                                maxlength="500"
                            >
                            </textarea>
                        </div>
                    </div>

                    
                </div>
            </section>
        </>
    );
}

export default Content;