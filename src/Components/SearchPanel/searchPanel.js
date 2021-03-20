import React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
import './search-panel.css'


export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = e => {
        const term = e.target.value;

        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className="content">
                <Col md={6}>
                    <FormGroup>
                        <Label className="text-search" >Поиск фильма</Label>
                        <Input type="text" name="search" id="search" placeholder="Введите название фильма" size={5} onChange={this.onUpdateSearch}/>
                    </FormGroup>
                </Col>
            </div>
        );
    }
}