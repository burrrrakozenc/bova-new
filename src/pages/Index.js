import React from 'react'
import Layout from '../Components/Layout/Layout'
import MainImage from '../assets/images/cover_1.jpg'
import Calendar from "../Components/Index/Calendar/Calendar";
import CustomCalendar from "../Components/Index/Calendar/CustomCalendar";
import MultipleItems from "../Components/Index/Recordings";

const imageWrapper = {
    width: '100%',
    height: '100%',

}

const Index = () => {
    return (
        <Layout>
            <div className="section-1">
                <div className="image-wrapper">
                    <img src={MainImage} alt=""/>
                </div>
            </div>
            <div className="section-2">
                <div className="row">
                    <div className="col-md-8">
                        <div className="mt-5">
                            <MultipleItems/>
                        </div>
                        <div className="mt-5">
                            <MultipleItems/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mt-5">
                            <CustomCalendar/>
                        </div>
                    </div>
                </div>
                {/*<div style={{minHeight: '10rem'}}>*/}
                {/*</div>*/}

                {/*<Calendar/>*/}
            </div>
        </Layout>
    )
}

export default Index

