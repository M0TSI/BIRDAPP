import React from 'react';
import Header from "../components/Header";
import InfoPlan from "../components/InfoPlan";
import InfoDetalle from "../components/InfoDetalle";




// ES7 snippets to do 'rfce'

function VistaDetalle() {
    return (
        <div>
            <Header/>
            <div>
                <InfoPlan
                src="http://www.revistayucatan.com/v1/wp-content/uploads/2020/09/x28714-australia-lanza-una-oferta-de-trabajo-para-vivir-en-el-paraiso-de-una-isla-tropical.jpg.pagespeed.ic_.mmYr9lewmr.jpg" 
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
                name="Sol Naciente Mil Aves" 
                price="180"                
                />
               <InfoDetalle
                servicios ="Hola"
                actividades = "Hola"
               />
            </div>
        </div>
    )
}

export default VistaDetalle