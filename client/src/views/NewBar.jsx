import React from 'react'
import httpClient from '../httpClient'

class NewBar extends React.Component{
    state = {
		fields: { 
            name: '', 
            address: ''
        }
	}

	handleFormChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	handleFormSubmit(evt) {
		evt.preventDefault()
		httpClient.addBar(this.state.fields).then((serverResponse) => {
            this.props.history.push('/bars')
        })
	}
    render(){
        const { name, address } = this.state
        return(
            <form onChange={this.handleFormChange.bind(this)} onSubmit={this.handleFormSubmit.bind(this)}>
                <input type="text" placeholder="Name" name="name" value={name} />
                <input type="text" placeholder="Address" name="address" value={address} />
                <button>Add Bar</button>
            </form>
        )
    }
}

export default NewBar