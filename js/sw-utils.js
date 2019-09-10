//este me servira para trasladar la logica de mi sw principal aqio,
//y asi no tener muy cargado mi sw principal


//guardar en cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {

    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();

        });
    } else {
        return res;
    }



}