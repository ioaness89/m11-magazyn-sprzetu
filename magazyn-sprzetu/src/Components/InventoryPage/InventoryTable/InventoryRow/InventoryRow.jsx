const InventoryRow = ({id, name, category, quantity, minimumQuantity, location}) => {
    return <>
    <tr>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{minimumQuantity}</td>
        <td>{location}</td>
    </tr>
    </>
}
export default InventoryRow;