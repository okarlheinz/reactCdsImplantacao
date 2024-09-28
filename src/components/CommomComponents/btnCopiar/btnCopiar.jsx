// BtnCopiar.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BtnCopiar = ({ senha }) => {
    const [copiada, setCopiada] = useState(false);

    const copiarSenha = () => {
        navigator.clipboard.writeText(senha);
        setCopiada(true);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Comando copiado para a área de transferência!",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <>
            {senha && (
                <button
                    type="button"
                    className="btn btn-success mt-3"
                    onClick={copiarSenha}
                    style={{ marginLeft: '5px' }}>
                    <i className="bi bi-copy"></i> Copiar
                </button>
            )}
            {copiada && (
                <div className="alert alert-danger alert-dismissible fade show alert-custom" role="alert">
                    Copiada para a área de transferência
                    <button type="button" className="close" onClick={() => setCopiada(false)} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
        </>
    );
};

export default BtnCopiar;
