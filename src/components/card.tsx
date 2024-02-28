import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/design.module.scss'
import { Col, Container, Row } from 'react-bootstrap';

interface CardProps {
    heading: string;
    description: string;
    thumbnail: any;
    link: any;
}

const Card: React.FC<CardProps> = ({ heading, description, thumbnail, link }) => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col md={4}>
                    <div className={styles.card_content}>
                        <Image src={thumbnail} alt="Thumbnail" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{heading}</div>
                            <p className="text-gray-700 text-base">{description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href={link}>Read More</Link>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={styles.card_content}>
                        <Image src={thumbnail} alt="Thumbnail" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{heading}</div>
                            <p className="text-gray-700 text-base">{description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href={link}>Read More</Link>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={styles.card_content}>
                        <Image src={thumbnail} alt="Thumbnail" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{heading}</div>
                            <p className="text-gray-700 text-base">{description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link href={link}>Read More</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Card;
