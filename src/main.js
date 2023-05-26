import { render } from "./utilities";
import HomePage from "./pages/HomePage/HomePage";

const app = document.querySelector("#app");
// const render = (content,app)=>{
//     app.innerHTML = content();
// }
render(HomePage,app);