import React, { useState } from "react"
import Modal from "./Modal"

const Project = () => {
    const photos = [
        {
            name: "TimeKiller-0",
            description: 'An application that allows you to play mini games for fun while saving highscores to user profiles',
            stack: 'HTML, CSS, JavaScript, Bootstrap, SQL, Express, Sequelize, bcrypt',
            role: 'assited with backend',
            caption: 'TK-0',
            github: "https://github.com/Rehtribution/p2-TK0",
            deployment: "https://timekiller-0.herokuapp.com/"
        },
        {
            name: "JAM",
            description: 'A task manager that allows you to sign up, log and keep track of tasks, a calculator feature to manage payments, and news to keep up with what happens in the world!',
            stack: 'HTML, CSS, JavaScript, React, Mongoose, MongoDB, bootstrap',
            role: 'adding calculator function, front end, nav bar',
            caption: 'JAM',
            github: "https://github.com/jennyk1989/jam",
            deployment: "https://ancient-lake-76105.herokuapp.com/"
        },
        {
            name: "CINEMATICS",
            description: 'A site that allows you to search for new movies and find the closest showing to you!',
            stack: 'HTML, CSS, JavaScript, Foundation, Movie and Gracenote API',
            role: 'incorporate API function, front end',
            caption: 'CINEMATICS',
            github: "https://github.com/alfonsof4/CINEMANIACS",
            deployment: "no available yet"
        },

    ]

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentPhoto, setCurrentPhoto] = useState()
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen)
    }

    return (
        <section>
            <div>
                {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal}/>)}
            </div>
            <div className="project-row">
                {photos.map((image, i) => (
                    <div className="project-img" key={i}>
                        <p
                            className="project-name"
                            onClick={() => toggleModal(image, i)}
                        >
                            {image.caption}</p>
                        <img
                            src={require(`../assets/projects${i}.jpg`).default}
                            alt={image.name}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project