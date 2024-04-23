import css from '../ImageGallery/ImageGallery.module.css'

export default function ImageGallery ({itemList, onChoosePhoto}) {
    return (<ul className={css.container}>
        {itemList.map((item)=> {
            return (<li key={item.id} id={item.id} onClick={(e)=>{
                onChoosePhoto(e.currentTarget.id);
            }}>
                <div  className={css.item}>
                  <img className={css.image} src={item.urls.small} alt={item.description} />
                </div>
            </li>)
        })}
    </ul>
    )};
