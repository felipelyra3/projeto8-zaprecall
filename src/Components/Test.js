export default function Test() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Você clicou em enviar.');
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <button type="submit">Enviar</button>
        </form>
      );
}