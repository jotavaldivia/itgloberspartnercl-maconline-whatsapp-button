import React from 'react'
import PropTypes from 'prop-types';

type Props = {
    logo: string    // imagen.png
    phone: string    //+5678347456
    message: string  // estas comunicándote con maconline, por favor ingresa tu duda
    whidth: string    //80px
}

const WhatappButton = ({ logo, phone, message, whidth }: Props) => {
    console.log(logo, phone, message)
    const formatedMessage = message.replace(/ /g, "%20")
    return (
        <>
            <div className='fixed bottom-2 right-2 flex flexColumn z-999'>
                <a href={`https://wa.me/${phone}?text=${formatedMessage}`}>
                    <img width={whidth} src={logo} alt="soy el logo de whatsapp" />
                </a>
            </div>
        </>
    )
}


WhatappButton.PropTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    whidth: PropTypes.string,
}

WhatappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "+56879347348",
    message: "estas comunicándote con maconline, por favor ingresa tu duda",
    whidth: "60px"
}

WhatappButton.schema = {
    title: "botón de whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "logo de whatsapp",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            },
            phone: {
                title: "teléfono",
                description: "Agrega por favor el número de telefono",
                type: "string",
            },
            message: {
                title: "mensaje",
                description: "Agrega por favor el mensaje que se verá para tu cliente",
                type: "string",
                widget: {
                    "ui:widget": "textarea"
                },
            },
            whidth: {
                title: "width",
                description: "Agrega el ancho del logo",
                type: "string",
            }
        }
    }
}

export default WhatappButton