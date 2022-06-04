import React, { Component } from 'react';
import './add-items.css';
class AddItems extends Component
{
    state = {
        mision: '',
        duration: ''
    };
    handelChange = (e) =>
    {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handelSubmit = (e) =>
    {
        e.preventDefault();
        this.props.AddItems(this.state);
        this.setState({
            mision: '',
            duration: ''
        });

    };

    render()
    {
        return (
            <div>
                <form onSubmit={ this.handelSubmit } className=''>
                    <input type='text' id='mision' placeholder='Enter the mision...' onChange={ this.handelChange } value={ this.state.mision } className='input' required />
                    <input type='number' id='duration' placeholder='Enter duration...' onChange={ this.handelChange } value={ this.state.duration } className='input' required /> /mints
                    <input type='submit' value='Add' className='Add' />
                </form>
            </div>
        );
    }
}

export default AddItems;