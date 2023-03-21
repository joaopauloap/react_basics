import ReactDOM from 'react-dom/client'
import Test from './components/TestComponent'
import HelloWorldComponent from './components/TestComponent'
import FragmentComponent from './components/FragmentComponent'
import Multi,{ BomDia } from './components/MultiplosComponent'
import Saudacao from './components/SaudacaoClasseComponent'
import Saudacao2 from './components/SaudacaoClasseConstrutorComponent'
import Pai from './components/Pai'
import Produto from './components/Produto'
import Marca from './components/Marca'
//ReactDOM.render(<HelloWorldComponent nome="joao"/>,document.getElementById("root"))
const domNode = document.getElementById("root")
const root = ReactDOM.createRoot(domNode)
root.render(
  <div>
    <Test></Test>
    <hr></hr>
    <HelloWorldComponent nome="joao"/>
    <hr></hr>
    <FragmentComponent/>
    <hr></hr>
    <BomDia nome="joao"/>
    <hr></hr>
    <Multi.BoaNoite nome="paulo"></Multi.BoaNoite>
    <hr></hr>
    <Saudacao tipo="Como vai" nome="João"></Saudacao>
    <hr></hr>
    <Saudacao2 tipo="Fala" nome="Paulo"></Saudacao2>
    <hr></hr>
    <Pai nome="Severino" sobrenome="Araújo"></Pai>
    <hr></hr>
    <Marca nomeMarca="Fiat">
      <Produto nomeProduto="Uno"></Produto>
      <Produto nomeProduto="Palio"></Produto>
      <Produto nomeProduto="Strada"></Produto>
    </Marca>
  </div>
)