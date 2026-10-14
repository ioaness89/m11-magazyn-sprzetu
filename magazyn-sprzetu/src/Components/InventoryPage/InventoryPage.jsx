import InventoryFilters from "./InventoryFilters/InventoryFilters";
import InventoryTable from "./InventoryTable/InventoryTable";
import { useState } from "react";

const InventoryPage = ({items}) => {
    const [filters, setfilters] = useState({
        search: "",
        category: "all",
        location: "all",
        completionRequired: false
    });

    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(filters.search.toLowerCase());
        const matchesCategory = filters.category === 'all' || item.category === filters.category;
        const matchesLocation = filters.location === 'all' || item.location === filters.location;
        const matchesCompletion = !filters.completionRequired || item.quantity <= item.minimumQuantity;

        return matchesSearch && matchesCategory && matchesLocation && matchesCompletion;
    })


    return <>
    <div className="card shadow-sm">
        <div className="card-header bg-dark text-white p-2 mb-4">
            <h5 className="mb-0">Magazyn</h5>
        </div>
        
        <InventoryFilters filters={filters} setFilters={setfilters} items={items}/>
        <InventoryTable items={filteredItems}/>
    </div>
    </>
}

export default InventoryPage;