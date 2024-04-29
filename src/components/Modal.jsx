
export default function Modal({data,isOpen,closeModal}){
    const {id,name,status,species,gender,origin,location,image}=data
    return (
    <div className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>x</button>
        <div key={id}className=" modalcontenido">
            <p>{name}</p>
            <ul>
                <li><b>Estado</b>:{status}</li>
                <li><b>Especie</b>:{species}</li>
                <li><b>Genero</b>:{gender}</li>
                <li><b>Origen</b>:{origin.name}</li>
                <li><b>Location</b>:{location.name}</li>
            </ul>
            <img src={image} className="imagen"></img>
        </div>
      </div>

    </div>
  )
}
