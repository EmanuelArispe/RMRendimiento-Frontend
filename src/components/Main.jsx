import ButtonComponent from "./ButtonComponent.jsx";
import {useState} from "react";
import SectionComponent from "./SectionComponent.jsx";

export default function Main({tokenValue}) {
    const [selectedButton, setSelectedButton] = useState('Selecciona una opción');

    function handleSelect(selectedButton) {
        setSelectedButton(selectedButton);
    }

    return (<>
            <li className="list-group-button">
                <ol>
                    <ButtonComponent onSelect={() => {
                        handleSelect('get')
                    }}>Lista de Usuarios</ButtonComponent>
                </ol>
                <ol>
                    <ButtonComponent onSelect={() => {
                        handleSelect('put')
                    }}>Crear Usuario</ButtonComponent>
                </ol>
                <ol>
                    <ButtonComponent onSelect={() => {
                        handleSelect('search')
                    }}>Buscar Usuario</ButtonComponent>
                </ol>
                <ol>
                    <ButtonComponent onSelect={() => {
                        handleSelect('delete')
                    }}>Eliminar Usuario</ButtonComponent>
                </ol>
            </li>
            <SectionComponent token={tokenValue}>{selectedButton}</SectionComponent>
        </>
    )
}