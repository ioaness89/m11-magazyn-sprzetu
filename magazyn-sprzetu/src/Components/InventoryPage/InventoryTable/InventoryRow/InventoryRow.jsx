const InventoryRow = ({id, name, category, quantity, minimumQuantity, location, status , setItems}) => {
    // true - dodowanie, false - odejmowanie
    const changeItemAmount = (typeOfOperation) => {
    setItems(prevItems =>
        prevItems.map(item => {
            if (item.id !== id) {
            return item;
            }

            const newQuantity = Math.max(0, item.quantity + (typeOfOperation ? 1 : -1)
            );

            const newStatus =
            newQuantity === 0
                ? "Brak produktu"
                : newQuantity < item.minimumQuantity
                ? "Stan minimalny"
                : "Stan prawidłowy";

            return {
            ...item,
            quantity: newQuantity,
            status: newStatus
            };
        })
        );
    };
    return <>
    <tr>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{minimumQuantity}</td>
        <td>{location}</td>
        <td>{status}</td>
        <td>
            <button onClick={() => changeItemAmount(true)}>
                +1
            </button>
            <button onClick={() => changeItemAmount(false)}>
                -1
            </button>
        </td>
    </tr>
    </>
}
export default InventoryRow;