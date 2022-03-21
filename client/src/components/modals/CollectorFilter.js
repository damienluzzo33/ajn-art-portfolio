import React, {useState} from "react";

export function CollectorFilterModal(props) {

    const {newData, setNewData} = props;

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

    const handleSubmitFilter = async () => {
        let filteredData;
        if (dataFilters.subscribed.value && dataFilters.subscribed.enabled) {
            filteredData = newData.filter((element) => (element.subscribed));
            setNewData(filteredData);
        } else if (dataFilters.subscribed.enabled) {
            filteredData = newData.filter((element) => (!element.subscribed));
            setNewData(filteredData);
        }

        if (dataFilters.collectors_gifts.value && dataFilters.collectors_gifts.enabled) {
            filteredData = newData.filter((element) => (element.collectors_gifts))
            setNewData(filteredData);
        } else if (dataFilters.collectors_gifts.enabled) {
            filteredData = newData.filter((element) => (!element.collectors_gifts));
            setNewData(filteredData);
        }

        if (dataFilters.purchases.value && dataFilters.purchases.enabled) {
            filteredData = newData.sort((a,b) => b.purchases - a.purchases);
            setNewData(filteredData);
        } else if (dataFilters.purchases.enabled) {
            filteredData = newData.sort((a,b) => a.purchases - b.purchases);
            setNewData(filteredData);
        }
    }

    const handleChange = async (event) => {
        const input = event.target;
        if (input.name === "subscribed") {
            setDataFilters({
                ...dataFilters,
                subscribed: {
                    ...dataFilters.subscribed,
                    value: input.checked
                }
            })
        } else if (input.name === "subscribed_enable") {
            setDataFilters({
                ...dataFilters,
                subscribed: {
                    ...dataFilters.subscribed,
                    enabled: input.checked
                }
            })
        } else if (input.name === "collectors_gifts") {
            setDataFilters({
                ...dataFilters,
                collectors_gifts: {
                    ...dataFilters.collectors_gifts,
                    value: input.checked
                }
            })
        } else if (input.name === "collectors_gifts_enable") {
            setDataFilters({
                ...dataFilters,
                collectors_gifts: {
                    ...dataFilters.collectors_gifts,
                    enabled: input.checked
                }
            })
        } else if (input.name === "purchases") {
            setDataFilters({
                ...dataFilters,
                purchases: {
                    ...dataFilters.purchases,
                    value: input.checked
                }
            })
        } else if (input.name === "purchases_enable") {
            setDataFilters({
                ...dataFilters,
                purchases: {
                    ...dataFilters.purchases,
                    enabled: input.checked
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
                <label htmlFor="subscribed_enable">Enable Subscribed</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="subscribed_enable" 
                    id="subscribed_enable" 
                />
                <label htmlFor="collectors_gifts">Collectors Gifts?</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="collectors_gifts" 
                    id="collectors_gifts" 
                />
                <label htmlFor="collectors_gifts_enable">Enable Collectors Gifts</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="collectors_gifts_enable" 
                    id="collectors_gifts_enable" 
                />
                <label htmlFor="purchases">Order By Purchases</label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="purchases" 
                    id="purchases" 
                />
                <label htmlFor="purchases_enable">Enable Order Of Purchases </label>
                <input 
                    onChange={handleChange} 
                    type="checkbox" 
                    name="purchases_enable" 
                    id="purchases_enable" 
                />
            </div>
        </form>
    )
}