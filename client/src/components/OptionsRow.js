import React, {useState} from 'react';
import { CollectorFilterModal } from './modals/CollectorFilter';

export function CollectorOptions(props) {

    const {newData, setNewData} = props;

    return (
        <React.Fragment>
            <div className="options-row">
                <h2>Data Options</h2>
                <button>Filter Data</button>
                <button>Get All Data</button>
            </div>
            <div className='modal-background'>
                <div className='modal-main'>
                    <CollectorFilterModal newData={newData} setNewData={setNewData} />
                </div>
            </div>
        </React.Fragment>
    );
}

export function CouponOptions(props) {
    const { data } = props;
    return (
        <div className="options-row">
            <h2>Data Options</h2>
            <button>Filter Data</button>
            <button>Get All Data</button>
        </div>
    );
}

export function ProductOptions(props) {
    const { data } = props;
    return (
        <div className="options-row">
            <h2>Data Options</h2>
            <button>Filter Data</button>
            <button>Get All Data</button>
        </div>
    );
}

export function BlogOptions(props) {
    const { data } = props;
    return (
        <div className="options-row">
            <h2>Data Options</h2>
            <button>Filter Data</button>
            <button>Get All Data</button>
        </div>
    );
}

export function PodOptionsOptions(props) {
    const { data } = props;
    return (
        <div className="options-row">
            <h2>Data Options</h2>
            <button>Filter Data</button>
            <button>Get All Data</button>
        </div>
    );
}

export function InterestsOptions(props) {
    const { data } = props;
    return (
        <div className="options-row">
            <h2>Data Options</h2>
            <button>Filter Data</button>
            <button>Get All Data</button>
        </div>
    );
}