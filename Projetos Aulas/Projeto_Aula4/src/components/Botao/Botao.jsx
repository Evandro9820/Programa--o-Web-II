import './estilo.css'
function Botao(){
    
    const evento = () => {
        console.log("Clicou")
        alert("Clicou")
    }

    return (
        <div>
            <button className='botao' onClick={evento}>Clique aqui</button>
        </div>
    )
    
}
export default Botao;