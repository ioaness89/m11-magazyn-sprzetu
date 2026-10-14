const DashboardPage = ({items}) => {
    


    let listaRzeczyDoUzupelnienia = [];
    let wskaznik = 0;

    let liczbaPozycji = items.length;

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

    return <>
        <div class="card shadow-sm" >
    <div class="card-header bg-dark text-white">
        <h5 class="mb-0">Podsumowanie magazynu</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Liczba pozycji magazynowych
            <span class="badge bg-secondary rounded-pill">{liczbaPozycji}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Łączna liczba sztuk
            <span class="badge bg-primary rounded-pill">{liczbaSztuk}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Liczba pozycji poniżej stanu minimalnego
            <span class="badge bg-warning text-dark rounded-pill">{liczbaPozinejMinimum}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
            Liczba pozycji ze stanem zero
            <span class="badge bg-danger rounded-pill">{liczbaZeStanemZero}</span>
        </li>
    </ul>
    <div class="card-body border-top">
        <h6 class="fw-bold mb-2">Pozycje do uzupełnienia:</h6>
        <ul class="list-unstyled mb-0 ps-2">
            {lista}
        </ul>
    </div>
</div>
    </>
}

export default DashboardPage;