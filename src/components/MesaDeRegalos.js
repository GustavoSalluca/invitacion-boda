import React from 'react';

const MesaDeRegalos = () => {
    return (
        <div className="py-28 flex items-center justify-center bg-fuchsia-200 text-white">
            <div className="p-6 bg-cyan-700 rounded-lg max-w-xl text-center shadow-lg">
            <div className='flex justify-center'>
                <img src="/miboda/images/caja.png"  alt="Icono" className="w-14 h-14 mb-6"  />
                </div>
                <h2 className="text-3xl font-dancing-script font-bold mb-0">Mesa de Regalos</h2>
                <div className='flex justify-center'>
                <img src="images/linea.webp"  alt="Icono" className="w-64 h-30 -mt-8 -mb-8" />
                </div>
                <p className="text-lg mb-6">
                    Para nosotros lo más importante es tu presencia en este día tan especial. Si deseas apoyarnos con un
                    regalo, te dejamos los números de cuenta donde puedes hacer tu aporte:
                </p>
                <div className="text-left mb-4">
                    <p className="text-lg font-bold">Cuenta BCP:</p>
                    <p className="text-lg">123-456789-012</p>
                </div>
                <div className="text-left mb-4">
                    <p className="text-lg font-bold">Cuenta Interbank:</p>
                    <p className="text-lg">987-654321-098</p>
                </div>
                <div className="text-left">
                    <p className="text-lg font-bold">Cuenta BBVA:</p>
                    <p className="text-lg">567-890123-456</p>
                </div>
            </div>
        </div>
    );
};

export default MesaDeRegalos;
