import css from '../ImageGallery/ImageGallery.module.css'

export default function ImageGallery ({itemList}) {
    return (<ul className={css.container}>
        {itemList.map((item)=> {
            return (<li key={item.id} >
                <div className={css.item}>
                  <img className={css.image} src={item.urls.small} alt={item.description} />
                </div>
            </li>)
        })}
    </ul>
    )};
