import { Link } from 'react-router-dom'
export default function Card({ id, forename, surname, dob, nationality, description, teams, image, onClose }) {
    return (
      <div>
        <button onClick={() => onClose(id)}>X</button>
        <h2>{id}</h2>
        <div>
          <Link to={`/detail/${id}`}>
            <h2>
              {forename} {surname}
            </h2>
          </Link>
        </div>
        <h2>{dob}</h2>
        <h2>{nationality}</h2>
        <h2>{description}</h2>
        <h2>{teams}</h2>
        <img src={image} alt={name} />
      </div>
    );
}