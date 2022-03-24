import { mergeSort } from "../../utils/helpers";
import React, {useState} from "react";

export function ProductFilterModal(props) {

    const {allProducts, handleToggle, newData, setNewData} = props;

    const [dataFilters, setDataFilters] = useState({
        digital: {
            value: false,
            enabled: false
        },
        original_art: {
            value: false,
            enabled: false
        },
        original_price: {
            value: false,
            enabled: false
        }
    })



    const handleSubmitFilter = async (event) => {
        event.preventDefault();
        let filteredData = newData;
        console.log(dataFilters);
        if (dataFilters.digital.value && dataFilters.digital.enabled) {
            filteredData = filteredData.filter((element) => (element.digital));
        } else if (dataFilters.digital.enabled) {
            filteredData = filteredData.filter((element) => (!element.digital));
        }

        if (dataFilters.original_art.value && dataFilters.original_art.enabled) {
            filteredData = filteredData.filter((element) => (element.original_art))
        } else if (dataFilters.original_art.enabled) {
            filteredData = filteredData.filter((element) => (!element.original_art));
        }

        if (dataFilters.original_price.value && dataFilters.original_price.enabled) {
            filteredData = mergeSort(filteredData, "original_price").reverse();
        } else if (dataFilters.original_price.enabled) {
            filteredData = mergeSort(filteredData, "original_price");
        }
        console.log(filteredData);
        setNewData(filteredData);
    }

    const handleChange = async (event) => {
        setNewData(allProducts);
        const input = event.target;
        // console.log(input);
        // console.log(dataFilters);
        if (input.name === "digital") {
            setDataFilters({
                ...dataFilters,
                digital: {
                    ...dataFilters.digital,
                    value: input.checked ? true : false
                }
            })
        } else if (input.name === "digital_enable") {
            setDataFilters({
                ...dataFilters,
                digital: {
                    ...dataFilters.digital,
                    enabled: input.checked ? true : false
                }
            })
        } else if (input.name === "original_art") {
            setDataFilters({
                ...dataFilters,
                original_art: {
                    ...dataFilters.original_art,
                    value: input.checked ? true : false
                }
            })
        } else if (input.name === "original_art_enable") {
            setDataFilters({
                ...dataFilters,
                original_art: {
                    ...dataFilters.original_art,
                    enabled: input.checked ? true : false
                }
            })
        } else if (input.name === "original_price") {
            setDataFilters({
                ...dataFilters,
                original_price: {
                    ...dataFilters.original_price,
                    value: input.checked ? true : false
                }
            })
        } else if (input.name === "original_price_enable") {
            setDataFilters({
                ...dataFilters,
                original_price: {
                    ...dataFilters.original_price,
                    enabled: input.checked ? true : false
                }
            })
        }
    }

    return (
        <form className="modal-form" onSubmit={handleSubmitFilter}>
            <div className="input-box">
                <label htmlFor="digital">Digital?</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="digital" 
                    id="digital" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="digital_enable">Enable Digital</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="digital_enable" 
                    id="digital_enable" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="original_art">Original Art?</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="original_art" 
                    id="original_art" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="original_art_enable">Enable Original Art</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="original_art_enable" 
                    id="original_art_enable" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="original_price">Order By Original Price</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="original_price" 
                    id="original_price" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="original_price_enable">Enable Order Of Original Price</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="original_price_enable" 
                    id="original_price_enable" 
                />
            </div>
            <div className="input-box">
                <button type="submit" onClick={handleToggle} className="modal-submit-button">Filter Data</button>
            </div>
        </form>
    )
}