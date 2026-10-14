import InventoryRow from "./InventoryRow/InventoryRow";

const InventoryTable = ({items, setItems}) => {
    return <>
    <table className="table">
        <thead>
            <tr>
                <th>Nazwa</th>
                <th>Kategoria</th>
                <th>Ilość</th>
                <th>Ilość minimalna</th>
                <th>Lokalizacja</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => (
            <InventoryRow
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            quantity={item.quantity}
            minimumQuantity={item.minimumQuantity}
            location={item.location}
            status={item.status}
            setItems={setItems}
            />
        ))}
        </tbody>
        
    </table>
    </>
    
}

export default InventoryTable;