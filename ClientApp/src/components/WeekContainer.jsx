import React, { Component } from 'react'
import ApiKey from './ApiKey'
import { useState, useEffect } from 'react'

class WeekContainer extends Component {
  state = {
    loading: true,
    weathers: null,
  }
  async componentDidMount() {
    const url =
      'https://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=db8e0689f9d3292c19be3b64372ee3b4'

    const response = await fetch(url)
    const data = await response.json()
    console.log(data.list)
  }
  render() {
    return (
      <>
        <div>
          {this.state.loading || !this.state.weathers ? (
            <div>loading...</div>
          ) : (
            <>
              <div>{this.state.weathers.description}</div>
              <div>{this.state.weathers.main}</div>
            </>
          )}
        </div>
      </>
    )
  }
}

export default WeekContainer
