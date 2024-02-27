import Card from '../card/Card.jsx';

export default function Cards(props) {
    const { drivers, onClose } = props
    return (
        <div>
            {
                drivers.map(driver => (
                    <Card
                        key={driver.id}
                        id={driver.id}
                        forename={driver.name.forename}
                        surname={driver.name.surname}
                        dob={driver.dob}
                        nationality={driver.nationality}
                        description={driver.description}
                        teams={driver.teams}
                        image={driver.image.url}
                        onClose={onClose}
                    />
                ))    
            }
        </div>
    )
}