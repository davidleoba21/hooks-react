import { useState } from "react"
import Persona from "./Persona"

export const Empleado = () => {
    const [empleado, setEmpleado] = useState(
        [{"id":1,"nombre":"Chelsea","correo":"cwinchcum0@live.com","edad":1,"img_perfil":"http://dummyimage.com/179x100.png/ff4444/ffffff"},
        {"id":2,"nombre":"Arron","correo":"aburburough1@arstechnica.com","edad":2,"img_perfil":"http://dummyimage.com/224x100.png/ff4444/ffffff"},
        {"id":3,"nombre":"Carolyn","correo":"cginnelly2@shareasale.com","edad":3,"img_perfil":"http://dummyimage.com/123x100.png/cc0000/ffffff"},
        {"id":4,"nombre":"Sarita","correo":"sthoresby3@microsoft.com","edad":4,"img_perfil":"http://dummyimage.com/142x100.png/cc0000/ffffff"},
        {"id":5,"nombre":"Evie","correo":"egleder4@imgur.com","edad":5,"img_perfil":"http://dummyimage.com/161x100.png/ff4444/ffffff"},
        {"id":6,"nombre":"Tammy","correo":"tschreiner5@fda.gov","edad":6,"img_perfil":"http://dummyimage.com/102x100.png/dddddd/000000"},
        {"id":7,"nombre":"Ransom","correo":"rbittleson6@dagondesign.com","edad":7,"img_perfil":"http://dummyimage.com/170x100.png/ff4444/ffffff"},
        {"id":8,"nombre":"Lynsey","correo":"lchapelle7@narod.ru","edad":8,"img_perfil":"http://dummyimage.com/127x100.png/dddddd/000000"},
        {"id":9,"nombre":"Dorine","correo":"dfabri8@ask.com","edad":9,"img_perfil":"http://dummyimage.com/239x100.png/5fa2dd/ffffff"},
        {"id":10,"nombre":"Abner","correo":"awolfarth9@blogtalkradio.com","edad":10,"img_perfil":"http://dummyimage.com/204x100.png/ff4444/ffffff"},
        {"id":11,"nombre":"Dacie","correo":"dbuglassa@printfriendly.com","edad":11,"img_perfil":"http://dummyimage.com/149x100.png/ff4444/ffffff"},
        {"id":12,"nombre":"Rheba","correo":"raldieb@state.tx.us","edad":12,"img_perfil":"http://dummyimage.com/201x100.png/5fa2dd/ffffff"},
        {"id":13,"nombre":"Edeline","correo":"eriponc@huffingtonpost.com","edad":13,"img_perfil":"http://dummyimage.com/241x100.png/dddddd/000000"},
        {"id":14,"nombre":"Tommie","correo":"tupsond@wiley.com","edad":14,"img_perfil":"http://dummyimage.com/129x100.png/ff4444/ffffff"},
        {"id":15,"nombre":"Coralyn","correo":"cfleische@bloglovin.com","edad":15,"img_perfil":"http://dummyimage.com/185x100.png/dddddd/000000"},
        {"id":16,"nombre":"Linnea","correo":"lpeyesf@businessweek.com","edad":16,"img_perfil":"http://dummyimage.com/125x100.png/5fa2dd/ffffff"},
        {"id":17,"nombre":"Eleanora","correo":"egablerg@unesco.org","edad":17,"img_perfil":"http://dummyimage.com/195x100.png/dddddd/000000"},
        {"id":18,"nombre":"Emmalynne","correo":"ecaulderh@princeton.edu","edad":18,"img_perfil":"http://dummyimage.com/141x100.png/dddddd/000000"},
        {"id":19,"nombre":"Tine","correo":"tondraseki@fema.gov","edad":19,"img_perfil":"http://dummyimage.com/173x100.png/5fa2dd/ffffff"},
        {"id":20,"nombre":"Bartram","correo":"bwoolmingtonj@engadget.com","edad":20,"img_perfil":"http://dummyimage.com/195x100.png/dddddd/000000"}]
)

    return(
        <div>
            {empleado.map((persona) => {
                return (    
                    <Persona key={persona.id}
                    id={persona.id}
                    nombre={persona.nombre}
                    edad={persona.edad}
                    correo={persona.correo} 
                    perfil={persona.img_perfil}/>
                )
            })}
        </div>
    )
}