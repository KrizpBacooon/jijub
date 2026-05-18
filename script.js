document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('entertainmentForm');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const datos = {};
        
        formData.forEach((value, key) => {
            if (datos[key]) {
                if (!Array.isArray(datos[key])) {
                    datos[key] = [datos[key]];
                }
                datos[key].push(value);
            } else {
                datos[key] = value;
            }
        });
        
        mostrarResultado(datos);
    });

    function mostrarResultado(datos) {
        const generoTexto = {
            'accion': 'Acción',
            'comedia': 'Comedia',
            'drama': 'Drama',
            'terror': 'Terror',
            'ciencia-ficcion': 'Ciencia Ficción'
        };

        const plataformaTexto = {
            'netflix': 'Netflix',
            'amazon': 'Amazon Prime',
            'disney': 'Disney+',
            'hbo': 'HBO Max'
        };

        const frecuenciaTexto = {
            'diariamente': 'Diariamente',
            'semanalmente': 'Semanalmente',
            'mensualmente': 'Mensualmente',
            'ocasionalmente': 'Ocasionalmente'
        };

        let html = '<h2>¡Gracias por tu respuesta!</h2>';
        html += '<p><strong>Nombre:</strong> ' + datos.nombre + '</p>';
        html += '<p><strong>Género favorito:</strong> ' + (generoTexto[datos.genero] || datos.genero) + '</p>';
        html += '<p><strong>Plataforma preferida:</strong> ' + (plataformaTexto[datos.plataforma] || datos.plataforma) + '</p>';
        html += '<p><strong>Frecuencia:</strong> ' + (frecuenciaTexto[datos.frecuencia] || datos.frecuencia) + '</p>';
        
        if (datos.recomendar) {
            const recomendar = Array.isArray(datos.recomendar) ? datos.recomendar.join(', ') : datos.recomendar;
            html += '<p><strong>Recomendarías a un amigo:</strong> ' + (recomendar === 'si' ? 'Sí' : recomendar === 'no' ? 'No' : recomendar) + '</p>';
        }

        resultado.innerHTML = html;
        resultado.style.display = 'block';
        
        resultado.scrollIntoView({ behavior: 'smooth' });
    }
});