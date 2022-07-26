import {Image, Container, Row, Col } from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'



function Article ({ image, title, byline, created_date, story_text, url}){

    return(
        <Container >
            <Row className='article'>
                {/* <Col lg='3' className='my-col' >
                    {image ? <Image  width={image.width} height={image.height} rounded src={image.url}/>
                                 : <p> image not found </p> 
                    } 
                </Col> */}
                <Col lg='9'>
                    <Row>
                        <h1>{title}</h1>
                    </Row>
                    <Row>
                        <p>{created_date}</p>
                    </Row>
                    <Row>
                        { byline && <h2>{ byline }</h2> }
                    </Row>
                    <Row>
                        {story_text 
                        ?<p>{story_text}</p>
                        : <a href={url}>Link to story</a>}
                    </Row>

                </Col>
            
                            
            </Row>
        </Container>
    )
}
export default Article;