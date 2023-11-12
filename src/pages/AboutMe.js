import styled from "styled-components"
import Menu from "../components/menu/Menu"
import contact  from '../constants/socialMedia'
import SocialMedia from "../components/SocialMedia"

const AboutMe = () => {
    return(
        <Body>
            <Menu/>
            <SizeRestriction>
                <ArtistContainer>
                    <ArtistImg/>
                    <MediaContainer>
                        {contact.map((media, index) => (
                            <SocialMedia
                                key={index}
                                text={media.name}
                                link={media.url}
                            />
                        ))}
                    </MediaContainer>
                </ArtistContainer>
                
                <Presentation>
                    <h1>Lorem Ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu tortor ac diam sodales iaculis a vel felis. Sed fringilla tortor dolor, sit amet molestie ex mollis vel. Fusce hendrerit iaculis rutrum. Sed nec magna pulvinar, vehicula ante vel, pharetra eros. Donec et varius turpis. Mauris iaculis neque metus, eleifend congue nulla venenatis eget. Ut quam nulla, ultricies eget dictum at, vehicula ac enim. Donec non dui ante. Cras ex est, feugiat vitae diam eu, ornare molestie tortor. Donec sed justo in eros vehicula iaculis. Proin metus magna, consequat blandit mollis nec, ultrices vitae magna. Pellentesque sit amet porttitor tortor.
                    </p>
                </Presentation>
            </SizeRestriction>
        </Body>
    )
}

// vai virar img dps
const ArtistImg = styled.div`   
    background-color: green;
    min-height: 50vh;
`
const MediaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const ArtistContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 300px;
`

const Presentation = styled.div`
    display:flex;
    justify-content: center;
    width: 40vw;
    flex-wrap: wrap;
    & h1{
        padding: 0px;
        margin: 0px;
    }
`
const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SizeRestriction = styled.div`
    color: #fff;
    width: 90vw;
    display: flex;
    justify-content: space-around;
    background-color: #000;
    margin: 20px 0px;
    padding: 20px 0px;
`

export default AboutMe