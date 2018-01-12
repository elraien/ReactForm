import React from 'react';



export default class Form extends React.Component {
	state = {
		varDate: '',
		varStatementNumber: '',
		varFullName: '',
		varHiredDate: '',
		varProfession:  '',
		varProfessionCode: '',
		varSalaryDigits: '',
		varSalaryString: '',
		varSigningPerson: '',
		varSigningPersonsPosition: '',
		};



// export createPostRequest(fields){
// 	return fetch('localhost:8080/createDocument', {
// 	method: 'POST',
// 	mode: 'CORS',
// 	body: JSON.stringify(fields),
// 	headers: {
// 	'Content-Type': 'application/json'
// 	}
// 	}).then(res => {
// 	return res;
// 	}).catch(err => err);
// }

	change = e => {
		this.setState({
		[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
// 		fetch('localhost:8080/createDocument', {
//          method: 'POST',
//          headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
 
//         body: JSON.stringify(this.state.form)
//     })

// .then((response) => {console.log('response: ', response.status);
// 	response.json()
// })
// .catch((error) => console.error(error))
// }

		this.props.onSubmit(this.state);

		 this.setState({  //clears the form after submit click
		 	varDate: "",
		 	varStatementNumber: "",
		 	varFullName: "",
			varHiredDate: "",
		 	varProfession: "",
		 	varProfessionCode: "",
		 	varSalaryDigits: "",
		 	varSalaryString: "",
		 	varSigningPerson: "",
		 	varSigningPersonsPosition: ""

	 });
		}

	render() {
		const { form } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<input
				name='varFullName' 
				placeholder="Name, Surname" 
				value={this.state.varFullName} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<input
				name='varStatementNumber' 
				placeholder="Number of your Statement" 
				value={this.state.varStatementNumber} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<input
				name='varDate' 
				placeholder="Issuing Date" 
				value={this.state.varDate} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<input
				name='varHiredDate'
				placeholder="Hired on (date)" 
				value={this.state.varHiredDate} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<input
				name='varProfession' 
				placeholder="Current Position" 
				value={this.state.varProfession} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<input
				name='varProfessionCode' 
				placeholder="Profession Code" 
				value={this.state.varProfessionCode} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<input
				name='varSalaryDigits' 
				placeholder="Salary (Digits)"
				value={this.state.varSalaryDigits} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<input
				name='varSalaryString' 
				placeholder="Salary (words)" 
				value={this.state.varSalaryString} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<input
				name='varSigningPerson' 
				placeholder="Person Who Will Sign" 
				value={this.state.varSigningPerson} 
				onChange={e => this.change(e)}
				/>
				<br /><br />
				<input
				name='varSigningPersonsPosition' 
				placeholder="Signing Person's Position" 
				value={this.state.varSigningPersonsPosition} 
				onChange={e => this.change(e)}
				/>
				<br /> <br />

				<button onClick={e => this.onSubmit(e)}>Submit</button>
			</form>
			);
	}
}