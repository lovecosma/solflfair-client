import React from 'react'
import { connect } from 'react-redux'

function Home(props) {  
    return (
        <div>
            <h1>Solflair Jewelry</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      session: state
    }
  }
   

export default connect(mapStateToProps)(Home)
