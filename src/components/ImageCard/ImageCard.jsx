import css from '../ImageCard/ImageCard.module.css';

export default function ImageCard ({item}) {
    return (<div  className={css.item}>
        <img className={css.image} src={item.urls.small} alt={item.description} />
      </div>)
}