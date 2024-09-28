// GeradorSenha.js
import React, { useState } from 'react';
import './geradorSenha.css';
import BtnCopiar from '../../components/CommomComponents/btnCopiar/btnCopiar';

const GeradorSenha = () => {
    const [quantidade, setQuantidade] = useState(8);
    const [letrasMaiusculas, setLetrasMaiusculas] = useState(true);
    const [letrasMinusculas, setLetrasMinusculas] = useState(true);
    const [numeros, setNumeros] = useState(true);
    const [caracteresEspeciais, setCaracteresEspeciais] = useState(false);
    const [senhaGerada, setSenhaGerada] = useState('');

    const gerarSenha = () => {
        let caracteres = '';
        const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const minusculas = 'abcdefghijklmnopqrstuvwxyz';
        const numerosChar = '0123456789';
        const especiais = '!@#$%^&*()_+[]{}|;:,.<>?';

        if (letrasMaiusculas) caracteres += maiusculas;
        if (letrasMinusculas) caracteres += minusculas;
        if (numeros) caracteres += numerosChar;
        if (caracteresEspeciais) caracteres += especiais;

        let senha = '';
        for (let i = 0; i < quantidade; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[randomIndex];
        }

        setSenhaGerada(senha);
    };

    return (
        <div className="container mt-5">
            <h2>Gerador de Senha</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade de caracteres:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        min="4"
                        max="32"
                    />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="letrasMaiusculas"
                        checked={letrasMaiusculas}
                        onChange={() => setLetrasMaiusculas(!letrasMaiusculas)}
                    />
                    <label className="form-check-label" htmlFor="letrasMaiusculas">
                        Incluir letras maiúsculas
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="letrasMinusculas"
                        checked={letrasMinusculas}
                        onChange={() => setLetrasMinusculas(!letrasMinusculas)}
                    />
                    <label className="form-check-label" htmlFor="letrasMinusculas">
                        Incluir letras minúsculas
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="numeros"
                        checked={numeros}
                        onChange={() => setNumeros(!numeros)}
                    />
                    <label className="form-check-label" htmlFor="numeros">
                        Incluir números
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="caracteresEspeciais"
                        checked={caracteresEspeciais}
                        onChange={() => setCaracteresEspeciais(!caracteresEspeciais)}
                    />
                    <label className="form-check-label" htmlFor="caracteresEspeciais">
                        Incluir caracteres especiais
                    </label>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={gerarSenha}>
                    Gerar Senha
                </button>
                <BtnCopiar senha={senhaGerada} /> {/* Utilize o novo componente */}

                {senhaGerada && (
                    <div className="mt-3">
                        <label htmlFor="senhaGerada">Senha Gerada:</label>
                        <textarea
                            id="senhaGerada"
                            className="form-control"
                            value={senhaGerada}
                            readOnly
                            style={{ resize: 'none', backgroundColor: '#f0f0f0' }} // Fundo acinzentado e não redimensionável
                        />
                    </div>
                )}
            </form>
        </div>
    );
};

export default GeradorSenha;
