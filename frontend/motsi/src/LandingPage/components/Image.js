import React from 'react';
import '../components/styles/Image.css'



function Image() {

    return (
        <div className="container">
            <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                    <img src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="Gallery img 1" className="gallery__img"></img>
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <img src="https://images.unsplash.com/photo-1600299871181-d70762d374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80" alt="Gallery img 2" className="gallery__img"></img>
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <img src="https://images.unsplash.com/photo-1588367374023-7bd7c113c41c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" alt="Gallery img 3" className="gallery__img"></img>
                </figure>

                <figure className="gallery__item gallery__item--4">
                    <img src="https://images.unsplash.com/photo-1567013048999-2d97735fd1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80" alt="Gallery img 4" className="gallery__img"></img>
                </figure>
                <figure className="gallery__item gallery__item--5">
                    <img src="https://www.exitoysuperacionpersonal.com/wp-content/uploads/2021/03/frases-sobre-los-pajaros.jpg" alt="Gallery img 5" className="gallery__img"></img>
                </figure>
                <figure className="gallery__item gallery__item--6">
                    <img src="https://images.unsplash.com/photo-1494964227851-d31bec6b1363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="Gallery img 6" className="gallery__img"></img>
                </figure>
            </div> 
        </div>
)
}

export default Image