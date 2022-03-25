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
        }
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
                            //src={require(`../../src/assets/projects${i}.jpg`).default}
                            alt={image.name}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project