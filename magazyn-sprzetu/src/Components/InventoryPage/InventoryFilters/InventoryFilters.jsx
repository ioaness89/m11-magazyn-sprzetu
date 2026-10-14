    const InventoryFilters = ({ filters, setFilters, items = [] }) => {
        const categories = [...new Set(items.map(item => item.category))];
        const locations = [...new Set(items.map(item => item.location))];

        const handleChange = (e) => {
            const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
            setFilters({
                ...filters,
                [e.target.name] : value
            })
        }

        return (
            <>
                <form onSubmit={(e) => e.preventDefault()} className="row g-3 align-items-center mb-4">
                    
                    <div className="col-md-4">
                        <input type="search" className="form-control" placeholder="Wyszukaj..." name="search"
                        onChange={handleChange} value={filters.search}/>
                    </div>
                    
                    <div className="col-md-3">
                        <select className="form-select" onChange={handleChange} name="category" value={filters.category}>
                            <option value="all">Wszystkie kategorie</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="col-md-3">
                        <select className="form-select" onChange={handleChange} name="location" value={filters.location}>
                            <option value="all">Wszystkie lokalizacje</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="col-md-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="required_completion" onChange={handleChange} 
                            name="completionRequired" checked={filters.completionRequired}/>
                            <label className="form-check-label" htmlFor="required_completion">
                                Do uzupełnienia
                            </label>
                        </div>
                    </div>

                </form>
            </>
        );
    };

    export default InventoryFilters;
