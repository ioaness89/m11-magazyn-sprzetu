import React, { useState } from 'react';

function Formularz({ items, setItems }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [minimumQuantity, setMinimumQuantity] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // Walidacja pustych pól
        if (
            !name.trim() ||
            !category ||
            quantity === "" ||
            minimumQuantity === "" ||
            !location
        ) {
            setError("Wszystkie pola muszą być uzupełnione.");
            setSuccess("");
            return;
        }

        // Walidacja liczb
        const qty = Number(quantity);
        const minQty = Number(minimumQuantity);

        if (
            !Number.isInteger(qty) ||
            !Number.isInteger(minQty) ||
            qty < 0 ||
            minQty < 0
        ) {
            setError(
                "Ilości muszą być liczbami całkowitymi większymi lub równymi 0."
            );
            setSuccess("");
            return;
        }

        // Przygotowanie obiektu produktu
        const newItem = {
            id: items.length+1,
            name: name.trim(),
            category,
            quantity: qty,
            minimumQuantity: minQty,
            location,
            status: qty === 0 ? "Brak produktu" : qty < minQty ? "Stan minimalny" : "Stan prawidłowy"
        };

        try {
            // Pobranie istniejących produktów
            const savedItems = JSON.parse(
                localStorage.getItem("items") || "[]"
            );

            if (!Array.isArray(savedItems)) {
                throw new Error("Nieprawidłowy format danych.");
            }

            // Dodanie nowego produktu i zapis do localStorage
            const updatedItems = [...items, newItem];

            localStorage.setItem("items", JSON.stringify(updatedItems));
            setItems(updatedItems);
            // savedItems.push(newItem);
            // localStorage.setItem("items", JSON.stringify(savedItems));
            // setItems={savedItems}

            setSuccess("Produkt został zapisany!");
            setError("");

            // Czyszczenie formularza
            setName("");
            setCategory("");
            setQuantity("");
            setMinimumQuantity("");
            setLocation("");
        } catch (err) {
            setError("Nie udało się zapisać produktu w localStorage.");
            setSuccess("");
        }
    }

    return (

        <form onSubmit={handleSubmit} className="container my-5">
            <section className="card border-0 shadow-lg mx-auto" style={{ borderRadius: "18px" }}>
                <header className="card-header bg-black text-white p-4 border-0" style={{ borderRadius: "18px 18px 0 0" }}>
                    <h3 className="mb-1">
                        <i className="bi bi-box-seam me-2"></i>
                        Dodaj nowy produkt
                    </h3>
                    <p className="mb-0 text-white-50">
                        Uzupełnij informacje o produkcie magazynowym
                    </p>
                </header>

                <section className="card-body p-4 p-md-5">
                    <label className="form-label fw-semibold mb-2">
                        <i className="bi bi-tag me-2 text-primary"></i>
                        Nazwa produktu
                        <input
                            type="text"
                            className="form-control form-control-lg mt-2"
                            placeholder="Np. Mysz komputerowa"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label className="form-label fw-semibold mb-3 w-100">
                        <i className="bi bi-grid me-2 text-primary"></i>
                        Kategoria produktu
                        <select
                            className="form-select form-select-lg mt-2"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Wybierz kategorię...</option>
                            <option value="Peryferia">Peryferia</option>
                            <option value="Ekrany">Ekrany</option>
                            <option value="Okablowanie">Okablowanie</option>
                            <option value="Komputery">Komputery</option>
                            <option value="Podzespoły">Podzespoły</option>
                            <option value="Audio">Audio</option>
                            <option value="Zasilanie">Zasilanie</option>
                            <option value="Sieci">Sieci</option>
                            <option value="Meble">Meble</option>
                        </select>
                    </label>

                    <section className="row g-3 mb-3">
                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold w-100">
                                <i className="bi bi-boxes me-2 text-primary"></i>
                                Aktualna ilość
                                <input
                                    type="number"
                                    className="form-control form-control-lg mt-2"
                                    min="0"
                                    step="1"
                                    placeholder="0"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="form-label fw-semibold w-100">
                                <i className="bi bi-exclamation-circle me-2 text-warning"></i>
                                Minimalna ilość
                                <input
                                    type="number"
                                    className="form-control form-control-lg mt-2"
                                    min="0"
                                    step="1"
                                    placeholder="Np. 5"
                                    value={minimumQuantity}
                                    onChange={(e) => setMinimumQuantity(e.target.value)}
                                />
                            </label>
                        </div>
                    </section>

                    <label className="form-label fw-semibold mb-4 w-100">
                        <i className="bi bi-geo-alt me-2 text-primary"></i>
                        Lokalizacja magazynowa
                        <select
                            className="form-select form-select-lg mt-2"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Wybierz lokalizację...</option>
                            <option value="Magazyn A">Magazyn A</option>
                            <option value="Magazyn B">Magazyn B</option>
                            <option value="Magazyn C">Magazyn C</option>
                        </select>
                    </label>

                    {error && (
                        <p className="alert alert-danger rounded-3" role="alert">
                            <i className="bi bi-exclamation-triangle me-2"></i>
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="alert alert-success rounded-3" role="status">
                            <i className="bi bi-check-circle me-2"></i>
                            {success}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn text-white btn-lg w-100 shadow-sm"
                        style={{
                            background: "linear-gradient(123deg, #00ff00 0%, #ff007f 27%, #ffff00 51%, #00ffff 74%, #ff0000 100%)",
                            padding: "50px",
                            color: "#000000",
                            fontFamily: "Comic Sans MS, sans-serif",
                            fontWeight: "bold"
                        }}
                    >
                        <i className="bi bi-plus-circle me-2"></i>
                        Dodaj produkt do magazynu
                    </button>
                </section>

            </section>
        </form>
    );
}

const NewItemPage = ({ items, setItems }) => {
    return <Formularz items={items} setItems={setItems} />;
};

export default NewItemPage;