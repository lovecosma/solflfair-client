import React from 'react'
import { connect } from 'react-redux'

function Home(props) {  
    return (
        <div>
            <img src="" alt=""></img>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      session: state
    }
  }
   

export default connect(mapStateToProps)(Home)
