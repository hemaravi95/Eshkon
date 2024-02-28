import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/ReduxStore';
import Card from '../components/card';
import image from '../assets/img.jpg';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const theme = useSelector((state: RootState) => state.app.theme);
    const router = useRouter();

    return (
        <div className={`page ${theme}`} onClick={() => router.push('/details')}>
            <Card
                heading="Example Heading"
                description="This is a description for the example card. It supports rich text, allowing for bold, italics, and more."
                thumbnail={image}
                link=''
            />
            <p className="theme-tag">Using - {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</p>
            <style>{`
                .theme-tag {
                margin-top: 20px;
                text-align: center;
                font-size: 18px;
                }
                .page.light {
                background-color: #fff;
                color: #000;
                height: 100vh;
                margin-top:-20px;
                }
                .page.dark {
                background-color: #333;
                color: #fff;
                height: 100vh;
                margin-top:-20px;
                }
            `}
            </style>
        </div >
    );
};

export default Home;
