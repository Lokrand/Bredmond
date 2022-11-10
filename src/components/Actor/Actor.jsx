import styles from './Actor.module.css';

export const Actor = ({data}) => {

  return (
    <div>
      <img src={require(data.image)} alt="Актёр"/>
    </div>
  )
}