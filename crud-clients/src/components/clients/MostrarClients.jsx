import React, { useEffect, useState } from 'react'
import Header from '../helper/Header'
import {collection, doc, getDoc, getDocs, deleteDoc} from 'firebase/firestore'
import {dataBase} from '../../firebase/dataBase'



const MostrarClients = () => {

    const [clients, setClients] = useState([])
    const tablaClients = collection(dataBase, 'clientes')

    const listarClients = async () => {
          const datos = await getDocs(tablaClients)

    }

    const eliminarClients = async (id) =>{

    }

    useEffect (()=>{
        listarClients()
    }, [])

      return (
        <section>MostrarClients
          <Header />
          <table className='table'>
            <thead>
              <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Telefono</th>
                <td>
                  <button></button>
                </td>
              </tr>
            </thead>
          </table>
        </section>
      )
}

export default MostrarClients