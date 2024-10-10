import { ArrowRightIcon, ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import SidebarItem from './SidebarItem';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faPenToSquare, faFileWord } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
    expanded: boolean;
    setExpanded: (expanded: boolean | ((curr: boolean) => boolean)) => void;
    children?: React.ReactNode;
}

function Sidebar({ children, expanded, setExpanded }: SidebarProps) {
    return (
        <div className="relative">
            <div
                className={`fixed inset-0 bg-gray-400 transition-opacity duration-300 ${expanded ? 'opacity-50 sm:hidden' : 'opacity-0 pointer-events-none'}`}
            />
            <aside
                className={`h-screen transition-all duration-300 ${expanded ? 'w-64' : 'w-20'} bg-sidebar`} // Cambia el fondo de la sidebar
            >
                <nav className="flex flex-col h-full border-r bg-sidebar shadow-md"> {/* Fondo ajustado aquí */}
                    <div className="flex items-center justify-between p-4 pb-2">
                        <img
                            src="/assets/images/MaiDataLogoFinal.png"
                            className={`transition-all duration-300 ${expanded ? 'w-40' : 'w-0'} logo`} // Ajusta el tamaño del logo aquí
                            alt=""
                        />
                        <div className="sm:block">
                            <button
                                onClick={() => setExpanded((curr: boolean) => !curr)}
                                className="rounded-lg bg-blue-600 text-white p-1.5 hover:bg-blue-700 transition duration-200" // Cambiar el fondo de la flecha a azul
                            >
                                {expanded ? (
                                    <ArrowLeftIcon className="h-6 w-6" />
                                ) : (
                                    <ArrowRightIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                    <ul className="flex-1 px-3">{children}</ul>
                </nav>
            </aside>
        </div>
    );
}

export default function MakeSidebar({ expanded, setExpanded }: SidebarProps) {
    const navBarItems = [
        { icon: <HomeIcon />, text: 'Home', active: false }, // Cambia el estado activo a false
        {
            icon: <FontAwesomeIcon icon={faFileExcel} />,
            subMenu: [
                { icon: <FontAwesomeIcon icon={faPenToSquare} />, text: 'Crear inventario' },
                { icon: <FontAwesomeIcon icon={faPenToSquare} />, text: 'Crear resumenes compras' },
            ],
            text: 'Excel',
        },
        {
            icon: <FontAwesomeIcon icon={faFileWord} />,
            subMenu: [
                { icon: <FontAwesomeIcon icon={faPenToSquare} />, text: 'Crear inventario' },
                { icon: <FontAwesomeIcon icon={faPenToSquare} />, text: 'Generar documento' },
            ],
            text: 'Word',
        },
    ];

    return (
        <Sidebar expanded={expanded} setExpanded={setExpanded}>
            {navBarItems.map((item, index) => (
                <SidebarItem key={index} expanded={expanded} {...item} />
            ))}
        </Sidebar>
    );
}
