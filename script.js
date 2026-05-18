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

        const tiempoTexto = {
            'menos-5': 'Menos de 5 horas',
            '5-10': '5 a 10 horas',
            '10-20': '10 a 20 horas',
            'mas-20': 'Más de 20 horas'
        };

        const dispositivoTexto = {
            'tv': 'Televisor',
            'celular': 'Celular',
            'laptop': 'Laptop',
            'tablet': 'Tablet'
        };

        const contenidoTexto = {
            'peliculas': 'Películas',
            'series': 'Series',
            'documentales': 'Documentales',
            'anime': 'Anime'
        };

        let html = '<h2>¡Gracias por tu respuesta!</h2>';
        html += '<p><strong>1. Nombre:</strong> ' + datos.nombre + '</p>';
        html += '<p><strong>2. Género favorito:</strong> ' + (generoTexto[datos.genero] || datos.genero) + '</p>';
        html += '<p><strong>3. Plataforma preferida:</strong> ' + (plataformaTexto[datos.plataforma] || datos.plataforma) + '</p>';
        html += '<p><strong>4. Frecuencia:</strong> ' + (frecuenciaTexto[datos.frecuencia] || datos.frecuencia) + '</p>';
        
        if (datos.recomendar) {
            const recomendar = Array.isArray(datos.recomendar) ? datos.recomendar.join(', ') : datos.recomendar;
            html += '<p><strong>5. Recomendarías a un amigo:</strong> ' + (recomendar === 'si' ? 'Sí' : recomendar === 'no' ? 'No' : recomendar) + '</p>';
        }

        html += '<p><strong>6. Serie favorita:</strong> ' + datos.serie + '</p>';
        html += '<p><strong>7. Horas a la semana:</strong> ' + (tiempoTexto[datos.tiempo] || datos.tiempo) + '</p>';
        html += '<p><strong>8. Dispositivo principal:</strong> ' + (dispositivoTexto[datos.dispositivo] || datos.dispositivo) + '</p>';
        
        if (datos.contenido) {
            const contenido = Array.isArray(datos.contenido) ? datos.contenido.map(c => contenidoTexto[c] || c).join(', ') : (contenidoTexto[datos.contenido] || datos.contenido);
            html += '<p><strong>9. Tipos de contenido:</strong> ' + contenido + '</p>';
        }

        html += '<p><strong>10. Edad:</strong> ' + datos.edad + ' años</p>';

        resultado.innerHTML = html;
        resultado.style.display = 'block';
        
        resultado.scrollIntoView({ behavior: 'smooth' });
    }
});