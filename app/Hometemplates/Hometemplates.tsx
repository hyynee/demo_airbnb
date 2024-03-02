import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../components/Footer/Footer';
import {Outlet} from 'react-server-dom-webpack/server.edge'
type Props = {}

const HomeTemplates: React.FC = ({ }: Props): JSX.Element => {
    return (
        <>
            <Header></Header>
            <div className="content_layout" style={{ minHeight: '80vh' }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    )
}

export default HomeTemplates