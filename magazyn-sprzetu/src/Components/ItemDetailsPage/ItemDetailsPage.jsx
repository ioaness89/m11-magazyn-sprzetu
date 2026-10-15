import { useNavigate, useParams } from "react-router-dom";

function ItemDetailsPage({
  items,
  increaseStock,
  decreaseStock,
  deleteItem
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div className="container-fluid p-0">
        <div className="bg-dark text-white p-3">
          <h4 className="mb-0">Szczegóły pozycji</h4>
        </div>

        <div className="p-3">
          <h5>Nie znaleziono produktu</h5>

          <button
            className="btn btn-secondary mt-2"
            onClick={() => navigate("/inventory")}
          >
            Wróć do magazynu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-0">
      <div className="bg-dark text-white p-3">
        <h4 className="mb-0">Szczegóły pozycji</h4>
      </div>

      <div className="p-3">
        <h2 className="mb-4">{item.name}</h2>

        <div className="card">
          <div className="card-body">

            <div className="row mb-3">
              <div className="col-md-3">
                <strong>ID</strong>
              </div>
              <div className="col-md-9">
                {item.id}
              </div>
            </div>

            <hr />

            <div className="row mb-3">
              <div className="col-md-3">
                <strong>Nazwa</strong>
              </div>
              <div className="col-md-9">
                {item.name}
              </div>
            </div>

            <hr />

            <div className="row mb-3">
              <div className="col-md-3">
                <strong>Kategoria</strong>
              </div>
              <div className="col-md-9">
                {item.category}
              </div>
            </div>

            <hr />

            <div className="row mb-3">
              <div className="col-md-3">
                <strong>Stan magazynowy</strong>
              </div>
              <div className="col-md-9">
                {item.quantity}
              </div>
            </div>

            <hr />

            <div className="row mb-3">
              <div className="col-md-3">
                <strong>Stan minimalny</strong>
              </div>
              <div className="col-md-9">
                {item.minimumQuantity}
              </div>
            </div>

            <hr />

            <div className="row mb-3">
              <div className="col-md-3">
                <strong>Lokalizacja</strong>
              </div>
              <div className="col-md-9">
                {item.location}
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-md-3">
                <strong>Status</strong>
              </div>

              <div className="col-md-9">
                {item.quantity === 0 ? (
                  <span className="badge bg-danger">
                    Brak produktu
                  </span>
                ) : item.quantity < item.minimumQuantity ? (
                  <span className="badge bg-warning text-dark">
                    Stan minimalny
                  </span>
                ) : (
                  <span className="badge bg-success">
                    Stan prawidłowy
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>

        <div className="mt-4">

          <button
            className="btn btn-success me-2"
            onClick={() => increaseStock(item.id, 1)}
          >
            + Zwiększ stan
          </button>

          <button
            className="btn btn-warning me-2"
            onClick={() => decreaseStock(item.id, 1)}
            disabled={item.quantity === 0}
          >
            - Zmniejsz stan
          </button>

          <button
            className="btn btn-danger me-2"
            onClick={() => {
              deleteItem(item.id);
              navigate("/inventory");
            }}
          >
            Usuń pozycję
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("/inventory")}
          >
            Wróć do magazynu
          </button>

        </div>
      </div>
    </div>
  );
}

export default ItemDetailsPage;