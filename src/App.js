import React, { Component } from 'react'
import styled from 'styled-components'
import ApolloClient from 'apollo-client'
import gql from 'graphql-tag'
import { EnerguideLogo } from '@cdssnc/gcui'
import DataTable from './DataTable'
import FipBar from './FipBar'

const client = new ApolloClient()

let query = gql`
  query {
    houses(count: 200) {
      house_id
      aircop
      accentestar
      acmodelnumber
      acwindestar
      acwindnum
      air50p
      aircondtype
      aircop
      atticceilingdef
      baseloadsmurb
      basementfloorar
      batch_number
      blowerdoortest
      builder
      caflaceilingdef
      ceilingtype
      ceilins
      cenventsystype
      cid
      cop
      crawlspfloorar
      creationdate
      credit_egh
      credit_garage
      credit_lighting
      credit_oth1oth2
      credit_pv
      credit_thermst
      credit_vent
      credit_wind
      csia
      dataset
      decadebuilt
      depressexhaust
      dhwhpcop
      dhwhptype
      dryerfuel
      dryermanufacturer
      dryermodel
      dwhrl1m
      dwhrm1m
      eghcritnatach
      eghcrittotach
      eghdeshtloss
      eghfconelec
      eghfconngas
      eghfconoil
      eghfconprop
      eghfcontotal
      eghfconwood
      eghfcostelec
      eghfcostngas
      eghfcostoil
      eghfcostprop
      eghfcosttotal
      eghfcostwood
      eghfurnaceaec
      eghfurseaeff
      eghfurseaseff
      eghheatfconse
      eghheatfconsg
      eghheatfconso
      eghheatfconsp
      eghheatfconsw
      eghhlair
      eghhlceiling
      eghhlexposedflr
      eghhlfound
      eghhlwalls
      eghhlwindoor
      eghinexposedflr
      eghrating
      eghspaceenergy
      eid
      eincentive
      entryby
      entrydate
      epacsa
      epacsasupphtg1
      epacsasupphtg2
      erselecghg
      ersenergyintensity
      ersghg
      ershldoor
      ershlwindow
      erslightapplianceenergy
      ersngasghg
      ersoilghg
      ersotherelecenergy
      erspropghg
      ersrating
      ersrefhouserating
      ersrenewableelec
      ersrenewableelecghg
      ersrenewableprod
      ersrenewablesolar
      ersrenewablesolarghg
      ersspacecoolenergy
    }
  }
`

const Main = styled.main`
  width: 80%;
  margin-top: 5em;
  margin-left: auto;
  margin-right: auto;
`

class App extends Component {
  state = {
    data: [],
    fiplinks: [
      {
        url: 'https://www.canada.ca/en/index.html',
        text: 'Canada.ca',
      },
      {
        url: 'http://www.servicecanada.gc.ca/eng/home.shtml',
        text: 'Services',
      },
      {
        url: 'http://www.canada.gc.ca/depts/major/depind-eng.html',
        text: 'Departments',
      },
    ],
  }

  handleClick() {
    console.log('clicked.', this)
  }

  componentDidMount() {
    client
      .query({ query })
      .then(({ data }) => {
        this.setState({ data: data.houses })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <FipBar links={this.state.fiplinks} />
        <Main>
          <EnerguideLogo />
          <DataTable data={this.state.data} />
        </Main>
      </div>
    )
  }
}

export default App
