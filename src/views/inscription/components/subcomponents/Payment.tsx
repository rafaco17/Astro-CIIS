interface Props {
  number: string,
  cod: string,
  qr: string | undefined
}

export const Payment = ({ number, cod, qr } : Props) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center p-4 rounded-md mb-4">
        <p className="text-lg font-semibold">
          {qr ? 'Nombre:' : 'Número de cuenta:'}
        </p>
        <div className="flex items-center">
          <p className="text-xl font-bold">{number}</p>
          <svg
            onClick={() => handleCopy(number)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6 ml-2 cursor-pointer text-gray-700 hover:text-gray-900"
          >
            <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
          </svg>
        </div>
      </div>
      
      <div className="flex justify-between items-center bg-gray-900 p-4 rounded-md mb-4">
        <p className="text-lg font-semibold">
          {qr ? 'Número celular:' : 'Código de cuenta interbancario:'}
        </p>
        <div className="flex items-center">
          <p className="text-xl font-bold">{cod}</p>
          <svg
            onClick={() => handleCopy(cod)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6 ml-2 cursor-pointer text-gray-700 hover:text-gray-900"
          >
            <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
          </svg>
        </div>
      </div>

      {qr && (
        <div className="flex justify-between items-center bg-white p-4 rounded-md mb-4">
          <p className="text-lg font-semibold">Código QR:</p>
          <div className="flex items-center">
            <img src={qr} alt="QR Code" className="w-24 h-24"/>
          </div>
        </div>
      )}
      
      <p className="text-sm text-gray-700">
        Se verificará la transacción realizada a la cuenta lo más antes posible, continúe con el registro.
      </p>
    </div>
  );
};
