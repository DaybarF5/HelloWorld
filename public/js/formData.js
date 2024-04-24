async function intento(event) {
    event.preventDefault();
    csv_document = document.getElementById('file');
    if (csv_document) {
        try {

            
            console.log(csv_document);
            //validar que el archivo sea csv
            let ext = csv_document.split('.').pop();
            if (ext !== 'csv') {
                alert('El archivo debe ser de tipo CSV');
                return false;
            }
        } catch (e) {
            console.log(e);
        }

        let formData = new FormData();
        formData.append('objeto', csv_document);
        console.log(formData);
    }


    // COPIA POR SI DEJA DE FUNCIONAR
    let request = "phpfiles/request.php?";

    //esto deja de funcionar ocasionalmente
    // let request = "phpfiles/request.php?send=1";

    try {
        const response = await fetch(request, {
            method: "POST",
            body: formData
        }
        );
        const res_request = await response.json();

        var data = JSON.parse(res_request);
        if (data.status == true) {
            return data.message;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}



