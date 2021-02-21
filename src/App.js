import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import starWars from 'api/starWars'
import Home from 'screens/Home/Home'
import Login from 'screens/UserFlow/Login/Login'
import Register from 'screens/UserFlow/Register/Register'
import Starships from 'screens/UserFlow/Starships/Starships'

const App = () => {
  const [starShips, setStarShips] = useState([])

  useEffect(() => {
    const fetchStarShips = async (searchShips) => {
      try {
        const { data: { results } } = await starWars.get('starships', {
          params: {
            results: searchShips
          }
        })
        setStarShips(results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchStarShips()
  }, [])

  console.log('data', starShips)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/starships'>
          <Starships data={starShips} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
