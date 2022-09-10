import React from   'react';
import Advertisement from '../Home/Advertisement';
import Header from '../Header/Header';
import "./Content.css";

const Content = () => {
    return (
        <>
            <Header />
            <Advertisement />
            <div className="app_content--container">
                <div className= 'app_content--title'>
                    Title
                </div>
                <div className='app_content--function'>
                    <button className= 'app_content--button'>SHARE</button>
                </div>
                <div className='app_content--description'>
                    Author  Time and Description
                </div>
                <div className= 'app_content--content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus eget lacus a rutrum. Phasellus libero enim, sagittis congue odio auctor, placerat fermentum arcu. Nullam molestie elementum nisi, eu pulvinar risus eleifend sit amet. Quisque venenatis velit vel eros ullamcorper, vitae vulputate nulla gravida. Curabitur mi mi, lacinia ac urna quis, vestibulum facilisis ante. Pellentesque et finibus magna, vel lacinia risus. Donec dapibus odio metus, ut sagittis enim auctor a. Duis eget porta odio.

    In accumsan felis sem, at dictum augue ultrices vel. Vestibulum non semper nunc. Nulla dictum pharetra ligula finibus dapibus. Vestibulum sed mauris ac erat faucibus semper. Phasellus in semper orci, id placerat metus. Nunc aliquam ex quis diam consequat tempus. In hac habitasse platea dictumst. Suspendisse ac pharetra quam. Aenean ornare eleifend odio, facilisis dignissim neque volutpat vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus feugiat urna erat. Vivamus a ornare lectus. Aliquam euismod nisl vitae augue dictum lobortis. Duis ligula tortor, sagittis eget dolor id, accumsan convallis odio. Sed consequat, nulla ac pulvinar imperdiet, purus ex imperdiet lectus, ac tristique lorem erat eget mi. Donec placerat enim metus, quis placerat ante consectetur nec.

    Curabitur cursus nunc id feugiat sodales. Pellentesque efficitur porttitor porttitor. Sed congue vehicula posuere. Donec tempor pretium tellus, quis vestibulum libero rutrum eget. Proin eleifend libero volutpat nulla pulvinar, nec vestibulum eros sagittis. Vestibulum quis posuere augue, non mollis sapien. Etiam vehicula ligula in euismod euismod. Aliquam erat volutpat. Duis magna massa, dapibus ac lacus a, fermentum tempor ipsum. Suspendisse vel vestibulum enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.

    Integer placerat, lectus in sagittis scelerisque, nunc ligula bibendum magna, id vulputate ante lacus fringilla lectus. Pellentesque quis sollicitudin nibh, at vulputate purus. Quisque posuere egestas tellus, quis fermentum magna eleifend nec. Praesent eros leo, interdum sit amet interdum eu, rhoncus vitae ligula. Fusce quis pulvinar sem, ut scelerisque ipsum. Nulla sed ullamcorper arcu. Duis luctus mi sit amet lacus dictum, ac fringilla sapien lacinia. Aenean in condimentum dolor.

    Donec a pharetra eros, fermentum luctus dui. Quisque egestas dictum urna, in malesuada metus ultricies vitae. In gravida massa ipsum, nec mollis tellus ornare sit amet. Vivamus sed ligula non eros sollicitudin scelerisque id sit amet lacus. Pellentesque eu augue non nisl vestibulum eleifend. Nam maximus justo et sollicitudin porttitor. Curabitur massa nisi, ornare id finibus et, pulvinar maximus sapien. Nullam vitae molestie diam. Morbi leo dolor, laoreet ac orci quis, volutpat malesuada elit.
                </div>
            </div>
        </>
    );
}

export default Content;