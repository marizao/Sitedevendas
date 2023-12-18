import React, { useState } from 'react';

function Contatos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar formulário
    console.log('Enviando dados:', formData);
    // Adicione a lógica de envio para a API aqui
  };

  return (
    <div>
      <h1>Contatos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensagem"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contatos;
