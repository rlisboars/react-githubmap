import React, { Component } from 'react'
import { Container, Form } from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { Creators as MarkerActions } from '../../store/ducks/marker'

class Add extends Component {
  state = {
    userInput: ''
  }

  toastId = null

  componentDidMount() {
    this.userInputText.focus()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props
      .addMarkerRequest({
        user: this.state.userInput,
        latitude: this.props.coordinates[0],
        longitude: this.props.coordinates[1]
      })
      .then(_ => {
        if (!this.props.error) {
          this.props.cancelInsertion()
        } else {
          toast.configure({
            autoClose: 5000,
            draggable: false
          })
          toast.update(this.toastId, {
            render: this.props.error,
            type: toast.TYPE.ERROR,
            autoClose: true
          })
        }
      })
    this.setState({ userInput: '' })
  }

  render() {
    if (this.props.loading) {
      this.toastId = toast('Carregando usuário...', { autoClose: false })
    }
    return (
      <Container>
        <ToastContainer />
        {!this.props.loading && (
          <Form>
            <h4>Adicionar novo usuário</h4>
            <input
              type="text"
              placeholder="Usuário no Github"
              onChange={e => this.setState({ userInput: e.target.value })}
              value={this.state.userInput}
              ref={input => {
                this.userInputText = input
              }}
            />
            <div>
              <button onClick={this.props.cancelInsertion} type="button">
                Cancelar
              </button>
              <button type="submit" onClick={this.handleSubmit}>
                Salvar
              </button>
            </div>
            <span>Latitude: {this.props.coordinates[0]}</span>
            <span>Longitude: {this.props.coordinates[1]}</span>
          </Form>
        )}
      </Container>
    )
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  }
}

const mapStateToProps = state => ({
  loading: state.markers.loading,
  error: state.markers.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addMarkerRequest: MarkerActions.addMarkerRequest },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)
