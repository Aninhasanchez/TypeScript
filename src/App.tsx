import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logar = async () => {
    if (username === 'Aninha' && password === '123') { // <============== trocar aqui o seus dados
      try {
        await new Promise(resolve => setTimeout(resolve, 500));

        const fakeToken = 'fake-jwt-token-123'; // <================ trocar isso aqui tmb
        localStorage.setItem('token', fakeToken);

        console.log('Login bem-sucedido!');
        navigate('/home');
      } catch (error) {
        console.error('Erro inesperado:', error);
        alert('Erro inesperado.');
      }
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <>
      <div className="p-10 space-y-4">
        <div>
          <label htmlFor="username" className="text-xl pr-2">
           Username:
          </label>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="border-2"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="text-xl pr-2">
           Senha:
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={logar} className="border-2 p-2">
          Entrar
        </button>
      </div>
    </>
  );
}
