import styles from '../../styles/design.module.scss'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import data from "../../assets/img.jpg"

const Details = () => {
    return (
        <>
            <Image src={data} alt="Background" layout="fill" objectFit="cover" quality={100} style={{ zIndex: -1 }} />
            <Container className='mt-5'>
                <Row>
                    <Col md={4}>
                        <div className={styles.card_content}>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Example Heading</div>
                                <p className="text-gray-700 text-base">This is a description for the example card. It supports rich text, allowing for bold, italics, and more.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Details;
