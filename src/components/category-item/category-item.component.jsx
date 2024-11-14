import {DirectoryItemContainer,Body,BackgroundImage} from  './category-item.styles.jsx';
import { useNavigate } from 'react-router-dom';
const CategoryItem = ({ category }) => {
    const navigate = useNavigate()
    const navigateToCategoryPage = (title)=>{
        navigate(`shop/${title}`)
    }
    const { title, imageUrl } = category
    return (
        <DirectoryItemContainer onClick={()=>navigateToCategoryPage(title.toLowerCase())}>

            {/* <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/> */}
            {/* //TODO you have to pass imageUrl as a props and use it in style file */}
            <BackgroundImage imageUrl={imageUrl}/>

            <Body>
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </Body>
        </DirectoryItemContainer>

    );

}

export default CategoryItem;