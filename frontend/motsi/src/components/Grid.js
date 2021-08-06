import React from 'react';
import {useHistory} from "react-router-dom";
import './Grid.css';
import Card from '../components/Card';


function Grid({ src, description, name }) {
    const history = useHistory();
    return (
        <div className="grid">
            <Card
                src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$120/noche"
            />
            <Card
                src="https://images.unsplash.com/photo-1600299871181-d70762d374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$130/noche"
            />
            <Card
                src="https://images.unsplash.com/photo-1588367374023-7bd7c113c41c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$150/noche"
            />
            <Card
                src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$120/noche"
            />
            <Card
                src="https://images.unsplash.com/photo-1600299871181-d70762d374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$130/noche"
            />
            <Card
                src="https://images.unsplash.com/photo-1588367374023-7bd7c113c41c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$150/noche"
            />
            <Card
                src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$120/noche"
            />
            <Card
                src="https://images.unsplash.com/photo-1600299871181-d70762d374f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$130/noche"
            />
            <Card
                src="https://images.unsplash.com/photo-1588367374023-7bd7c113c41c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
                title="Titulo"
                description="Inserte descripcion."
                price="$150/noche"
            />
        </div>
    )
}

export default Grid

