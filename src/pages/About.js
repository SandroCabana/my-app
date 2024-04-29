import Layout from "@/components/Layout"
import Modal from "@/components/Modal"
import { useModal } from "@/components/useModal"
export async function getServerSideProps({id=14}){
  const res =  await fetch("https://rickandmortyapi.com/api/character/"+id)
  const datamodal=await res.json()
  return{
      props:{
          datamodal
      }
  }
}
export default function About({datamodal}) {
  const [ïsOpenModal1,openModal1,closeModal1]=useModal(false)
  return (
    <div>
      <Layout title={"About"}>
        <h2>About</h2>
      </Layout>
      <button onClick={ openModal1}>Modal1</button>
      <Modal data={datamodal} isOpen={ïsOpenModal1} closeModal={closeModal1}></Modal>
    </div>
  )
}
