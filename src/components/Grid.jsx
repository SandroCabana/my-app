import { useModal } from "@/components/useModal";
import Modal from "./Modal";
export default function Grid({ id, image, name, status, species, gender, origin,location }) {
    const [isOpen, openModal, closeModal] = useModal(false);

    const callModal = () => {
        openModal();
    };
    return (
        //estructura del grid
        <div  className="contenedor-tarjeta">
            <label></label>
            <img src={image} className="imagen"></img>
            <p>{name}</p>
            <label className={status == "Alive" ? "label-alive" : status == "Dead" ? "label-dead" : "label-unk"}>{status == "Alive" ? "Vivo" : status == "Dead" ? "Muerto" : "Desconocido"}</label>
            <ul>
                <li><b>Especie</b> : {species}</li>
                <li><b>Genero</b> : {gender}</li>
            </ul>
            <button name="button" className="card-button" onClick={callModal}>Detalles</button>
            <Modal
            //datos del modal
                data={{
                    id,
                    name,
                    status,
                    species,
                    gender,
                    origin,
                    location,
                    image
                }}
                
                isOpen={isOpen}
                closeModal={closeModal}
            />

        </div>
    )
}
