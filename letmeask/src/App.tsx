import { BrowserRouter, Route, Switch } from "react-router-dom";

import AuthProvider from "./contexts/AuthContext";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:roomId" component={Room} />
          <Route path="/admin/rooms/:roomId" component={AdminRoom} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
