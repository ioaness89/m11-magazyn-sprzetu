const DashboardPage = ({items}) => {
    const liczbaPozycji = items.length;

    const liczbaSztuk = items
    .map(item => item.quantity) 
    .reduce((suma, quantity) => suma + quantity, 0);

    const pozycjePonizejMinimum = items.filter(
        item => item.quantity < item.minimumQuantity && item.quantity !== 0
    ).length;

    const pozycjeZeStanemZero = items.filter(
        item => item.quantity === 0
    ).length;

    const listaRzeczyDoUzupelnienia = items
        .filter(item => item.status === "Brak produktu" || item.status === "Stan minimalny");
    {
        let listaRzeczyDoUzupelnienia = [];
        let wskaznik = 0;


        let liczbaSztuk = 0;
        items.forEach(element => {
            liczbaSztuk += element.quantity;
        });

        let liczbaPozinejMinimum = 0;
        items.forEach(element => {
            if(element.quantity < element.minimumQuantity){
                liczbaPozinejMinimum++;
                listaRzeczyDoUzupelnienia[wskaznik]= `${element.name}- Stan minimalny`;
                wskaznik++;
            }
        });

        let liczbaZeStanemZero = 0;
        items.forEach(element => {
            if(element.quantity == 0){
                liczbaZeStanemZero++;
                listaRzeczyDoUzupelnienia[wskaznik]= `${element.name}- Brak produktu`;
                wskaznik++;
            }
        })

        let lista = listaRzeczyDoUzupelnienia.map((item) =>(
            <li> {item} </li>
        ));
    }
    

    return <>
        <div className="card shadow-sm" >
    <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Podsumowanie magazynu</h5>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center">
            Liczba pozycji magazynowych
            <span className="badge bg-secondary rounded-pill">{liczbaPozycji}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            Łączna liczba sztuk
            <span className="badge bg-primary rounded-pill">{liczbaSztuk}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            Liczba pozycji poniżej stanu minimalnego
            <span className="badge bg-warning text-dark rounded-pill">{pozycjePonizejMinimum}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            Liczba pozycji ze stanem zero
            <span className="badge bg-danger rounded-pill">{pozycjeZeStanemZero}</span>
        </li>
    </ul>
    <div class="card-body border-top">
        <h6 className="fw-bold mb-2">Pozycje do uzupełnienia:</h6>
        <ul className="list-unstyled mb-0 ps-2">
            {listaRzeczyDoUzupelnienia.map(item => (
                <li key={item.id}>{item.name} - {item.status}</li>
            ))}
        </ul>
    </div>
</div>
    </>
}

export default DashboardPage;