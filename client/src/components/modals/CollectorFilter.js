import React, {useState} from "react";

export function CollectorFilterModal(props) {

    const {handleToggle, newData, setNewData} = props;

    const [dataFilters, setDataFilters] = useState({
        subscribed: {
            value: false,
            enabled: false
        },
        collectors_gifts: {
            value: false,
            enabled: false
        },
        purchases: {
            value: false,
            enabled: false
        }
    })

    const handleSubmitFilter = async (event) => {
        event.preventDefault();
        let filteredData = newData;
        if (dataFilters.subscribed.value && dataFilters.subscribed.enabled) {
            filteredData = filteredData.filter((element) => (element.subscribed));
        } else if (dataFilters.subscribed.enabled) {
            filteredData = filteredData.filter((element) => (!element.subscribed));
        }

        if (dataFilters.collectors_gifts.value && dataFilters.collectors_gifts.enabled) {
            filteredData = filteredData.filter((element) => (element.collectors_gifts))
        } else if (dataFilters.collectors_gifts.enabled) {
            filteredData = filteredData.filter((element) => (!element.collectors_gifts));
        }

        if (dataFilters.purchases.value && dataFilters.purchases.enabled) {
            filteredData = filteredData.sort((a,b) => b.purchases - a.purchases);
        } else if (dataFilters.purchases.enabled) {
            filteredData = filteredData.sort((a,b) => a.purchases - b.purchases);
        }
        setNewData(filteredData);
        handleToggle();
    }

    const handleChange = async (event) => {
        const input = event.target;
        if (input.name === "subscribed") {
            setDataFilters({
                ...dataFilters,
                subscribed: {
                    ...dataFilters.subscribed,
                    value: input.checked ? true : false
                }
            })
        } else if (input.name === "subscribed_enable") {
            setDataFilters({
                ...dataFilters,
                subscribed: {
                    ...dataFilters.subscribed,
                    enabled: input.checked ? true : false
                }
            })
        } else if (input.name === "collectors_gifts") {
            setDataFilters({
                ...dataFilters,
                collectors_gifts: {
                    ...dataFilters.collectors_gifts,
                    value: input.checked ? true : false
                }
            })
        } else if (input.name === "collectors_gifts_enable") {
            setDataFilters({
                ...dataFilters,
                collectors_gifts: {
                    ...dataFilters.collectors_gifts,
                    enabled: input.checked ? true : false
                }
            })
        } else if (input.name === "purchases") {
            setDataFilters({
                ...dataFilters,
                purchases: {
                    ...dataFilters.purchases,
                    value: input.checked ? true : false
                }
            })
        } else if (input.name === "purchases_enable") {
            setDataFilters({
                ...dataFilters,
                purchases: {
                    ...dataFilters.purchases,
                    enabled: input.checked ? true : false
                }
            })
        }
    }

    return (
        <form className="modal-form" onSubmit={handleSubmitFilter}>
            <div className="input-box">
                <label htmlFor="subscribed">Subscribed?</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="subscribed" 
                    id="subscribed" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="subscribed_enable">Enable Subscribed</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="subscribed_enable" 
                    id="subscribed_enable" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="collectors_gifts">Collectors Gifts?</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="collectors_gifts" 
                    id="collectors_gifts" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="collectors_gifts_enable">Enable Collectors Gifts</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="collectors_gifts_enable" 
                    id="collectors_gifts_enable" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="purchases">Order By Purchases</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="purchases" 
                    id="purchases" 
                />
            </div>
            <div className="input-box">
                <label htmlFor="purchases_enable">Enable Order Of Purchases</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="purchases_enable" 
                    id="purchases_enable" 
                />
            </div>
            <div className="input-box">
                <button type="submit" className="modal-submit-button">Filter Data</button>
            </div>
        </form>
    )
}