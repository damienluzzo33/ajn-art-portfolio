import React, { useState } from 'react';
import { CollectorFilterModal } from './modals/CollectorFilter';
import { ProductFilterModal } from './modals/ProductFilter';

export function CollectorOptions(props) {
    const { allCollectors, newData, setNewData } = props;

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggle = (event) => {
        console.log(event.target);
        if (!toggleModal) {
            setToggleModal(!toggleModal);
        } else {
            if (
                event.target.className === 'modal-background' ||
                event.target.className === 'modal-submit-button'
            ) {
                setToggleModal(!toggleModal);
            }
        }
    };

    return (
        <React.Fragment>
            <div className="options-row">
                <h2>Data Options</h2>
                <button onClick={handleToggle}>Filter Data</button>
                <button>Get All Data</button>
                <button>Add Collector</button>
            </div>
            <div
                style={{ display: toggleModal ? 'block' : 'none' }}
                className="modal-background"
                onClick={handleToggle}
            >
                <div className="modal-main">
                    <CollectorFilterModal
                        allCollectors={allCollectors}
                        newData={newData}
                        setNewData={setNewData}
                        handleToggle={handleToggle}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export function ProductOptions(props) {
    const { allProducts, newData, setNewData } = props;

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggle = (event) => {
        console.log(event.target);
        if (!toggleModal) {
            setToggleModal(!toggleModal);
        } else {
            if (
                event.target.className === 'modal-background' ||
                event.target.className === 'modal-submit-button'
            ) {
                setToggleModal(!toggleModal);
            }
        }
    };

    return (
        <React.Fragment>
            <div className="options-row">
                <h2>Data Options</h2>
                <button onClick={handleToggle}>Filter Data</button>
                <button>Get All Data</button>
                <button>Add Product</button>
            </div>
            <div
                style={{ display: toggleModal ? 'block' : 'none' }}
                className="modal-background"
                onClick={handleToggle}
            >
                <div className="modal-main">
                    <ProductFilterModal
                        allProducts={allProducts}
                        newData={newData}
                        setNewData={setNewData}
                        handleToggle={handleToggle}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export function CouponOptions(props) {
    // const { allCoupons, newData, setNewData } = props;

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleCoupon = (event) => {
        console.log(event.target);
        if (!toggleModal) {
            setToggleModal(!toggleModal);
        } else {
            if (
                event.target.className === 'modal-background' ||
                event.target.className === 'modal-submit-button'
            ) {
                setToggleModal(!toggleModal);
            }
        }
    };
    return (
        <React.Fragment>
            <div className="options-row">
                <h2>Data Options</h2>
                <button onClick={handleToggleCoupon}>Filter Data</button>
                <button>Get All Data</button>
                <button>Add Coupon</button>
            </div>
            {/* <div
                style={{ display: toggleModal ? 'block' : 'none' }}
                className="modal-background"
                onClick={handleToggle}
            >
                <div className="modal-main">
                    <CouponFilterModal
                        allCoupons={allCoupons}
                        newData={newData}
                        setNewData={setNewData}
                        handleToggle={handleToggle}
                    />
                </div>
            </div> */}
        </React.Fragment>
        
    );

}

export function BlogOptions(props) {
    // const { data } = props;
    return (
        <div className="options-row">
            <h2>Data Options</h2>
            <button>Filter Data</button>
            <button>Get All Data</button>
            <button>Add Blog</button>
        </div>
    );
}

export function PodOptionsOptions(props) {
    // const { data } = props;
    return (
        <div className="options-row">
            <h2>Data Options</h2>
            <button>Filter Data</button>
            <button>Get All Data</button>
            <button>Add POD Option</button>
        </div>
    );
}

export function InterestsOptions(props) {
    // const { data } = props;
    return (
        <div className="options-row">
            <h2>Data Options</h2>
            <button>Filter Data</button>
            <button>Get All Data</button>
            <button>Add Interest</button>
        </div>
    );
}
