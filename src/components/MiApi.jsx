// MiApi.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function MiApi({ searchTerm }) {
    const [laws, setLaws] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [filteredLaws, setFilteredLaws] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.feriadosapp.com/api/laws.json');
                console.log('Respuesta de la API:', response.data);
                if (Array.isArray(response.data.data)) {
                    setLaws(response.data.data);
                } else {
                    console.error('La respuesta no contiene un array de datos:', response.data);
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();

        return () => { };
    }, []);

    useEffect(() => {
        const filteredLaws = laws.filter(law => {
            return law.content.toLowerCase().includes(searchTerm.toLowerCase());
        });

        setFilteredLaws(filteredLaws);

        if (filteredLaws.length === 0 && searchTerm.trim() !== '') {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [laws, searchTerm]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {noResults && (
                <footer className="text-danger">No se encontraron fechas.</footer>
            )}
            {!noResults && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ley</th>
                            <th>Contenido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLaws.map((law, index) => (
                            <tr key={index} className={index % 2 === 0 ? "table-primary" : ""}>
                                <td>{law.id}</td>
                                <td>{law.title}</td>
                                <td>{law.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default MiApi;
