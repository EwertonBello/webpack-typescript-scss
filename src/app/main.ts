import Teste from '../components/teste';
import '../styles/style.scss';

let a = new Teste();

console.log(a.msg);
a.outro();

document.body.innerHTML = "<h1>Testando..</h1>";