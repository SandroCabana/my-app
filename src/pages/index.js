import Layout from "@/components/Layout";
import Grid from "@/components/Grid";
import { useState,useEffect } from "react";
const defaultEndpoint = "https://rickandmortyapi.com/api/character/"
export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json();
 
  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {

  const { info, results: defaultResults = [] } = data;

  const [results, updateResults] = useState(defaultResults);

  const [page, updatePage] = useState({
    ...info,
    current: defaultEndpoint
  });
  const { current } = page;

  useEffect(() => {


    if ( current === defaultEndpoint ) return;


    async function request() {
      const res = await fetch(current)
      const nextData = await res.json();

      updatePage({
        current,
        ...nextData.info
      });


      if ( !nextData.info?.prev ) {
        updateResults(nextData.results);
        return;
      }


      updateResults(prev => {
        return [
          ...prev,
          ...nextData.results
        ]
      });
    }

    request();
  }, [current]);

  function handleLoadMore() {
    updatePage(prev => {
      return {
        ...prev,
        current: page?.next
      }
    });
  }

  function handleOnSubmitSearch(e) {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find(field => field.name === 'query');

    const value = fieldQuery.value;
    var endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

    console.log(value);
    updatePage({
      current: endpoint
    });
  }


  return (
    <>
      <Layout title={"Rick & Morty"}/>
      <div className="contenedor-principal">
      <form className="contenedor-formulario" onSubmit={handleOnSubmitSearch}>
            <input  name="query" type="search" placeholder="Pickle Rick" className="input-find"></input>
            <button className="button-find" ><b>Buscar</b></button>
        </form>
        <div >
         
          <div className="contenedor-tarjetas">
            {results.map(result => {
            const { id, name, image,status,species,gender,origin,location } = result;
            return (
              
              <Grid id={id}
              image={image}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              location={location}
              />
            )
          })}
          </div>

        </div>
        <div className="page-navegador">
          <div className="card-button"onClick={handleLoadMore}>Cargar mas</div>
        </div>
        
      </div>
    </>
  );
}
