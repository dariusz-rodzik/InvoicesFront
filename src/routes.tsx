import { Route } from "react-router-dom";
import Add from './Components/Add'
import Main from './Components/Main'
import Explore from './Components/Explore'


const BaseRouter = () => (
  <div>
      <Route path="/" children={<Main></Main>} />
    <Route path="/add" children={<Add></Add>} />
    <Route path="/explore" children={<Explore/>} />

  </div>
);

export default BaseRouter;
