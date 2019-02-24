class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ring: '',
			power: true,
			bank: true
		};
		this.keyQ = this.keyQ.bind(this);
		this.keyW = this.keyW.bind(this);
		this.keyE = this.keyE.bind(this);
		this.keyA = this.keyA.bind(this);
		this.keyS = this.keyS.bind(this);
		this.keyD = this.keyD.bind(this);
		this.keyZ = this.keyZ.bind(this);
		this.keyX = this.keyX.bind(this);
		this.keyC = this.keyC.bind(this);
		this.keyQQ = this.keyQQ.bind(this);
		this.keyWW = this.keyWW.bind(this);
		this.keyEE = this.keyEE.bind(this);
		this.keyAA = this.keyAA.bind(this);
		this.keySS = this.keySS.bind(this);
		this.keyDD = this.keyDD.bind(this);
		this.keyZZ = this.keyZZ.bind(this);
		this.keyXX = this.keyXX.bind(this);
		this.keyCC = this.keyCC.bind(this);
		this.handelPower = this.handelPower.bind(this);
		this.handelBank = this.handelBank.bind(this);
		this.highVolume = this.highVolume.bind(this);
	}
	handelPower(){
		if(this.state.power == true){
			this.setState({
				power: false
			});
			$('.power').css('float', 'right');
		}
		else {
			this.setState({
				power: true
			});
			$('.power').css('float', 'left');
	  	}
	}
	handelBank(){
		if(this.state.bank == true){
			this.setState({
				bank: false
			});
			$('.bank').css('float', 'right');
		}
		else {
			this.setState({
				bank: true
			});
			$('.bank').css('float', 'left');
	  	}
	}
	keyQ() {
		let q = document.querySelector('#q');
		q.play();
		this.setState({
			ring: 'Heater 1'
		});
		var keyCode = 81;
	}
	keyW() {
		let w = document.querySelector('#w');
		w.play();
		this.setState({
			ring: 'Heater 2'
		});
		var keyCode = 87;
	}
	keyE() {
		let e = document.querySelector('#e');
		e.play();
		this.setState({
			ring: 'Heater 3'
		});
		var keyCode = 69;
	}
	keyA() {
		let a = document.querySelector('#a');
		a.play();
		this.setState({
			ring: 'Heater 4'
		});
		var keyCode = 65;
	}
	keyS() {
		let s = document.querySelector('#s');
		s.play();
		this.setState({
			ring: 'Clap'
		});
		var keyCode = 83;
	}
	keyD() {
		let d = document.querySelector('#d');
		d.play();
		this.setState({
			ring: 'Open HH'
		});
		var keyCode = 68;
	}
	keyZ() {
		let z = document.querySelector('#z');
		z.play();
		this.setState({
			ring: 'Kick n\' Hat'
		});
		var keyCode = 90;
	}
	keyX() {
		let x = document.querySelector('#x');
		x.play();
		this.setState({
			ring: 'Kick'
		});
		var keyCode = 88;		
	}
	keyC() {
		let c = document.querySelector('#c');
		c.play();
		this.setState({
			ring: 'Closed HH'
		});
		var keyCode = 67;
	}
	keyQQ() {
		let qq = document.querySelector('#q');
		qq.play();
		this.setState({
			ring: 'Chord 1'
		});
	}
	keyWW() {
		let ww = document.querySelector('#w');
		ww.play();
		this.setState({
			ring: 'Chord 2'
		});
	}
	keyEE() {
		let ee = document.querySelector('#e');
		ee.play();
		this.setState({
			ring: 'Chord 3'
		});
	}
	keyAA() {
		let aa = document.querySelector('#a');
		aa.play();
		this.setState({
			ring: 'Shaker'
		});
	}
	keySS() {
		let ss = document.querySelector('#s');
		ss.play();
		this.setState({
			ring: 'Open HH'
		});
	}
	keyDD() {
		let dd = document.querySelector('#d');
		dd.play();
		this.setState({
			ring: 'Closed HH'
		});
	}
	keyZZ() {
		let zz = document.querySelector('#z');
		zz.play();
		this.setState({
			ring: 'Punchy Kick'
		});
	}
	keyXX() {
		let xx = document.querySelector('#x');
		xx.play();
		this.setState({
			ring: 'Side Stick'
		});
	}
	keyCC() {
		let cc = document.querySelector('#c');
		cc.play();
		this.setState({
			ring: 'Snare'
		});
	}
	highVolume(){
		var v = document.querySelector('#v');
		v.addEventListener("change", setvolume , false);
	}
	render() {
		if(this.state.power){
			if(this.state.bank){
				return (
					<div className='container machine'>
						<div className='row' id='drum-machine'>
							<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 key'>
								<div className='drum-pad' id='1' onClick={this.keyQ}>
									<audio className='clip' id='q' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">
									</audio>Q
								</div>
								<div className='drum-pad' id='2' onClick={this.keyW}>
									<audio className='clip' id='w' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">
									</audio>W
								</div>
								<div className='drum-pad' id='3' onClick={this.keyE}>
									<audio className='clip' id='e' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">
									</audio>E
								</div>
								<div className='drum-pad' id='4' onClick={this.keyA}>
									<audio className='clip' id='a' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">
									</audio>A
								</div>
								<div className='drum-pad' id='5' onClick={this.keyS}>
									<audio className='clip' id='s' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">
									</audio>S
								</div>
								<div className='drum-pad' id='6' onClick={this.keyD}>
									<audio className='clip' id='d' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">
									</audio>D
								</div>
								<div className='drum-pad' id='7' onClick={this.keyZ}>
									<audio className='clip' id='z' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">
									</audio>Z
								</div>
								<div className='drum-pad' id='8' onClick={this.keyX}>
									<audio className='clip' id='x' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">
									</audio>X
								</div>
								<div className='drum-pad' id='9' onClick={this.keyC}>
									<audio className='clip' id='c' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">
									</audio>C
								</div>
							</div>
							<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
								<div>
									<p className='man-key'><b>Power</b></p>
									<div className='box' onClick={this.handelPower}>
										<div className='power x'></div>
									</div>
								</div>
								<div id='display'>{this.state.ring}</div>
								<div>
									<input id='v' type='range' min='0' max='100' value='1' step='1' onChange={this.highVolume}></input>
								</div>
								<div>
									<p className='man-key'><b>Bank</b></p>
									<div className='box' onClick={this.handelBank}>
										<div className='bank x'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}else {
				return (
					<div className='container machine'>
						<div className='row' id='drum-machine'>
							<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 key'>
								<div className='drum-pad' id='1' onClick={this.keyQQ}>
									<audio className='clip' id='q' src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3">
									</audio>Q
								</div>
								<div className='drum-pad' id='2' onClick={this.keyWW}>
									<audio className='clip' id='w' src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3">
									</audio>W
								</div>
								<div className='drum-pad' id='3' onClick={this.keyEE}>
									<audio className='clip' id='e' src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3">
									</audio>E
								</div>
								<div className='drum-pad' id='4' onClick={this.keyAA}>
									<audio className='clip' id='a' src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3">
									</audio>A
								</div>
								<div className='drum-pad' id='5' onClick={this.keySS}>
									<audio className='clip' id='s' src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3">
									</audio>S
								</div>
								<div className='drum-pad' id='6' onClick={this.keyDD}>
									<audio className='clip' id='d' src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3">
									</audio>D
								</div>
								<div className='drum-pad' id='7' onClick={this.keyZZ}>
									<audio className='clip' id='z' src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3">
									</audio>Z
								</div>
								<div className='drum-pad' id='8' onClick={this.keyXX}>
									<audio className='clip' id='x' src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3">
									</audio>X
								</div>
								<div className='drum-pad' id='9' onClick={this.keyCC}>
									<audio className='clip' id='c' src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3">
									</audio>C
								</div>
							</div>
							<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
								<div>
									<p className='man-key'><b>Power</b></p>
									<div className='box' onClick={this.handelPower}>
										<div className='power x'></div>
									</div>
								</div>
								<div id='display'>{this.state.ring}</div>
								<div>
									<input id='v' type='range' min='0' max='100' value='1' step='1' onChange={this.highVolume}></input>
								</div>
								<div>
									<p className='man-key'><b>Bank</b></p>
									<div className='box' onClick={this.handelBank}>
										<div className='bank x'></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}
		}else{
		return (
		<div className='container machine'>
			<div className='row' id='drum-machine'>
				<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 key'>
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
				<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
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
							<div className=' bank x'></div>
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