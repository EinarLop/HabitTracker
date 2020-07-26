import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import CreateHabit from './CreateHabit'
import Navbar from './Navbar'
import HabitList from './HabitList'
import ClosedHabitList from './ClosedHabitList'
import ClosedHabitCalendar from './ClosedHabitCalendar';

function App() {

  return (
    <Router>
      <ThemeProvider>
        <CSSReset />

        <Navbar />
        <Switch>
          <Route exact path="/">
            <HabitList />
          </Route>
          <Route exact path="/createGoal">
            <CreateHabit />
          </Route>
          <Route exact path="/closed">
            <ClosedHabitList />
          </Route>


        </Switch>




      </ThemeProvider>
    </Router>


  );
}

export default App;
