import React from 'react'

class SignUp extends React.Component
{

	constructor(props){
		super(props);
		this.state={
			email:'',
			password:'',
			name:''
		}
	}

	onNameInput=(event)=>{
		this.setState({name: event.target.value})
	}

	onEmailInput=(event)=>{
		this.setState({email: event.target.value})
	}

	onPasswordInput=(event)=>{
		this.setState({password: event.target.value})
	}

	onSubmit=()=>{

		fetch('http://localhost:3001/signup',{
			method: 'post',
			headers :{'Content-Type':'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name

			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user.name)
			{
				console.log(user);
				this.props.loadUser(user);
				this.props.onPageChange('home')

			}
		})
		
	}

	render(){
		return(
			<div >
				<article className="center mw5 ba b--black-10 mv4 shodow-3 br4 ">
					<main className="pa4 black-80">
					  <div className="measure center">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f4 fw6 ph0 mh0">Sign Up</legend>

					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
					        <input 
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="text" 
					        name="name"  
					        id="name" 
					        onChange= {this.onNameInput}
					        required
					        />
					      </div>

					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="email" 
					        name="email-address"  
					        id="email-address"
					        onChange= {this.onEmailInput} 
					        required
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="password" 
					        name="password"  
					        id="password"
					        onChange= {this.onPasswordInput}
					        required
					         />

					      </div>
					      
					    </fieldset>
					    <div className="">
					      <input 
					      	onClick={ this.onSubmit}
					      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      	type="submit" 
					      	value="Sign up" />
					    </div>
					    
					  </div>
					</main>
				</article>
			</div>

		);
	}
	
}

export default SignUp;