class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ring: '',
			power: true
		}
		this.keyQ = this.keyQ.bind(this);
		this.keyW = this.keyW.bind(this);
		this.keyE = this.keyE.bind(this);
		this.keyA = this.keyA.bind(this);
		this.keyS = this.keyS.bind(this);
		this.keyD = this.keyD.bind(this);
		this.keyZ = this.keyZ.bind(this);
		this.keyX = this.keyX.bind(this);
		this.keyC = this.keyC.bind(this);
		this.handelPower = this.handelPower.bind(this);
	}
	handelPower(){
		if(this.state.power == true){
			this.setState({
				power: false
			});
			$('.power').css('float', 'right')
		}
		else {
			this.setState({
				power: true
			});
			$('.power').css('float', 'left')
	  	}
	}
	keyQ() {
		let q = document.querySelector('#q');
		q.play();
		this.setState({
			ring: 'Heater 1'
		});
	}
	keyW() {
		let w = document.querySelector('#w');
		w.play();
		this.setState({
			ring: 'Heater 2'
		});
	}
	keyE() {
		let e = document.querySelector('#e');
		e.play();
		this.setState({
			ring: 'Heater 3'
		});
	}
	keyA() {
		let a = document.querySelector('#a');
		a.play();
		this.setState({
			ring: 'Heater 4'
		});
	}
	keyS() {
		let s = document.querySelector('#s');
		s.play();
		this.setState({
			ring: 'Clap'
		});
	}
	keyD() {
		let d = document.querySelector('#d');
		d.play();
		this.setState({
			ring: 'Open HH'
		});
	}
	keyZ() {
		let z = document.querySelector('#z');
		z.play();
		this.setState({
			ring: 'Kick n\' Hat'
		});
	}
	keyX() {
		let x = document.querySelector('#x');
		x.play();
		this.setState({
			ring: 'Kick'
		});
	}
	keyC() {
		let c = document.querySelector('#c');
		c.play();
		this.setState({
			ring: 'Closed HH'
		});
	}
	render() {
		if(this.state.power){
		return (
		<div className='container machine'>
			<div className='row' id='drum-machine'>
				<div className='col-lg-6 col-md-6 key'>
					<div className='drum-pad' id='1' onClick={this.keyQ}>
						<audio className='clip' id='q' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
						</audio>
					Q</div>
					<div className='drum-pad' id='2' onClick={this.keyW}>
						<audio className='clip' id='w' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">
						</audio>
					W</div>
					<div className='drum-pad' id='3' onClick={this.keyE}>
						<audio className='clip' id='e' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">
						</audio>
					E</div>
					<div className='drum-pad' id='4' onClick={this.keyA}>
						<audio className='clip' id='a' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">
						</audio>
					A</div>
					<div className='drum-pad' id='5' onClick={this.keyS}>
						<audio className='clip' id='s' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">
						</audio>
					S</div>
					<div className='drum-pad' id='6' onClick={this.keyD}>
						<audio className='clip' id='d' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">
						</audio>
					D</div>
					<div className='drum-pad' id='7' onClick={this.keyZ}>
						<audio className='clip' id='z' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">
						</audio>
					Z</div>
					<div className='drum-pad' id='8' onClick={this.keyX}>
						<audio className='clip' id='x' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">
						</audio>
					X</div>
					<div className='drum-pad' id='9' onClick={this.keyC}>
						<audio className='clip' id='c' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">
						</audio>
					C</div>
				</div>
				<div className='col-lg-6 col-md-6'>
					<div>
						<p className='man-key'><b>Power</b></p>
						<div className='box' onClick={this.handelPower}>
							<div className='power x'></div>
						</div>
					</div>
					<div id='display'>{this.state.ring}</div>
					<div>
						<p className='man-key'><b>Bank</b></p>
						<div className='box'>
							<div className='x'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
		}else{
			return (
				<div className='container machine'>
					<div className='row' id='drum-machine'>
						<div className='col-lg-6 col-md-6 key'>
							<div className='drum-pad' id='1'>Q</div>
							<div className='drum-pad' id='2'>W</div>
							<div className='drum-pad' id='3'>E</div>
							<div className='drum-pad' id='4'>A</div>
							<div className='drum-pad' id='5'>S</div>
							<div className='drum-pad' id='6'>D</div>
							<div className='drum-pad' id='7'>Z</div>
							<div className='drum-pad' id='8'>X</div>
							<div className='drum-pad' id='9'>C</div>
						</div>
						<div className='col-lg-6 col-md-6'>
							<div>
								<p className='man-key'><b>Power</b></p>
								<div className='box' onClick={this.handelPower}>
									<div className='power x'></div>
								</div>
							</div>
							<div id='display'>{this.state.ring= ''}</div>
							<div>
								<p className='man-key'><b>Bank</b></p>
								<div className='box'>
									<div className='x'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
};
ReactDOM.render(<App />, document.querySelector('#app'));