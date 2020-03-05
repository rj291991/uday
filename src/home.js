import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            url2: '',
            sessionUsername: ''
        }
    }

    componentDidMount() {
        this.setState({ sessionUsername: sessionStorage.getItem('username') })
    }

    loadView = (e, view) => {
        view == 'view1' ? this.setState({ url: e.target.value }) : this.setState({ url2: e.target.value })
    }

    logout = () => {

        sessionStorage.removeItem('username');
        sessionStorage.removeItem('isLogged');
        console.log(sessionStorage.getItem('username'))
        this.setState({ sessionUsername: null });

    }
    render() {

        const { sessionUsername } = this.state;
        return (
            <div>
                {sessionUsername == null ? <Redirect to='/' /> :
                    <div className="container-fluid border">
                        <div className="row p-4 border-bottom">
                            <div className="col-sm-2 mb-2">
                                <p>{this.state.sessionUsername}</p>
                            </div>
                            <div className="col-sm-4 mb-2">
                                <input type="text" className="form-control loadurl" id="view1" onChange={(e) => this.loadView(e, 'view1')} />
                            </div>
                            <div className="col-sm-4 mb-2">
                                <input type="text" className="form-control loadurl" id="view2" onChange={(e) => this.loadView(e, 'view2')} />
                            </div>
                            <div className="col-sm-2 mb-2">
                                <input type="button" defaultValue="Logout" class='btn btn-danger' onClick={this.logout} />
                            </div>
                        </div>
                        <div className="row p-4">
                            <div className="col-sm-6 border-right" id="view1-display">
                                <div>
                                    <iframe src={this.state.url} className='w-100 border' style={{ 'min-height': '80vh' }}></iframe>
                                </div>
                            </div>
                            <div className="col-sm-6" id="view2-display">
                                <div>
                                    <iframe src={this.state.url2} className='w-100 border' style={{ 'min-height': '80vh' }}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        )
    }
}

