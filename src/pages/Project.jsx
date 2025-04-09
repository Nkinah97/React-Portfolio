import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Project.css';

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="project-swiper"
                    >
                        {project.images && project.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`${project.title} - ${index + 1}`}
                                    className="project-details__cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    <div className="project-details__links">
                        {project.gitHubLink && (
                            <BtnGitHub link={project.gitHubLink} />
                        )}
                        {project.liveLink && (
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noreferrer"
                                className="btn-outline"
                            >
                                Live project
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Project; 