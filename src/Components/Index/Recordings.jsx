import React, { Component } from "react";
import Slider from "react-slick";
import '../../assets/css/slider.css'
import Img1 from '../../assets/images/28-400x240.jpg'
import Img2 from '../../assets/images/145-400x240.jpg'
import Img3 from '../../assets/images/252-400x240.jpg'
import Img4 from '../../assets/images/404-400x240.jpg'
import Img5 from '../../assets/images/410-400x240.jpg'
import Img6 from '../../assets/images/511-400x240.jpg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red",color:'black' }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green",color:'black' }}
            onClick={onClick}
        />
    );
}

class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: true,
            // dotsClass: "slick-dots slick-thumb custom-dots",
            infinite: true,
            // fade: true,
            // speed: 500,
            lazyLoad: true,
            autoplay: true,
            adaptiveHeight: true,
            slidesToShow: 3,
            swipeToSlide: true,
            slidesToScroll: 1,
            customPaging: i => (
                <div className="ft-slick__dots--custom">
                    <div className="custom-dots" />
                </div>
            ),
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
            // appendDots: dots => {
            //     return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
            // }

        };
        return (
            <div style={{width:'80%',margin:'0 auto'}}>
                <h2 className="mb-3">Records</h2>
                <Slider className="m-auto" {...settings}>
                    <div className="p-1">
                        <img src={Img1} alt="img"/>
                        {/*<h3>1</h3>*/}
                    </div>
                    <div className="p-1">
                        {/*<h3>2</h3>*/}
                        <img src={Img2} alt="img"/>
                    </div>
                    <div className="p-1">
                        <img src={Img3} alt="img"/>
                        {/*<h3>3</h3>*/}
                    </div>
                    <div className="p-1">
                        <img src={Img4} alt="img"/>
                        {/*<h3>4</h3>*/}
                    </div>
                    <div className="p-1">
                        <img src={Img5} alt="img"/>
                        {/*<h3>5</h3>*/}
                    </div>
                    <div className="p-1">
                        <img src={Img6} alt="img"/>
                        {/*<h3>6</h3>*/}
                    </div>
                </Slider>
            </div>
        );
    }
}

export default  MultipleItems