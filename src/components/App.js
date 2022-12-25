import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Leaderboard from './LeaderBoard';
import StudentDetail from './StudentDetail';
import Footer from './Footer';
import SecondFooter from './SecondFooter';

class App extends React.Component{
   render(){
    return(
    <div className='main-header'>

    <div className='header-container'>
        <div className='ui container'>
        <Header />
        </div>
    </div>

    <div className='ui container main_content'>
        <Banner title="Leaderboard" 
    desc="Interns Progression System uses performance tiers to track your growth. Along the way, you’ll earn badges for your achievements and compete for glory on live leaderboard."/>
    </div>

    <div className='ui container leaderboard_head'>
        <Leaderboard />
    </div>

    <div className='ui container student_info'>
        <StudentDetail name="Wali Muhammad"
        institute="Mehran University of engineering and technology"
        score={355}
        />

        <StudentDetail name="Muhammad Owais"
        institute="Mehran University of engineering and technology"
        score={323}
        />

        <StudentDetail name="Anas"
        institute="Mehran University of engineering and technology"
        score={321}
        />

        <StudentDetail name="Khizar"
        institute="NUST"
        score={234}
        />

        <StudentDetail name="Hassan"
        institute="Mehran University of engineering and technology"
        score={180}
        />

        <StudentDetail name="Hamza"
        institute="Mehran University of engineering and technology"
        score={145}
        />


        <StudentDetail name="Abdul Qadir"
        institute="NED"
        score={111}
        />

        <StudentDetail name="Anas Zafer"
        institute="Tabani Institute"
        score={66}
        />
    </div>

    <div className='footer-container'>
    <div className='ui container'>
    <Footer />
    </div>
    </div>

    <div className='secondary_foo'>
    <div className='ui container'>
    <SecondFooter />
    </div>
    </div>
    </div>
    )
   }
}

export default App;