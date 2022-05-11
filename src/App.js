import React from 'react';
import SiteBar from "./Components/SiteBar/main";
import SiteOverview from "./Components/SiteOverview/overview";
import Tickets from './Pages/Tickets/Tickets';
import Ideas from "./Pages/Ideas/Ideas";
import Contacts from "./Pages/Contacts/Contacts";
import Agents from "./Pages/Agents/Agents";
import Articles from "./Pages/Articles/Articles";
import Settings from "./Pages/Settings/Settings";
import Subscription from "./Pages/Subscription/Subscripttion";
// import Hero from "./Components/SiteHero/Hero"
import {Routes , Route} from 'react-router'

import "./Assets/css/main.css"

function App() {
	return (
		<>
			<SiteBar />
			<Routes>
      <Route path="/" element={<SiteOverview />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/ideas" element={<Ideas />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
		</>
	);
}

export default App;
