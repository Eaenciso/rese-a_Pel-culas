document.addEventListener("DOMContentLoaded", function () {
    const peliculas = {
        "jurassic-world-reino-caido": {
            titulo: "Jurassic World: El Reino Caído",
            sinopsis: "Han pasado tres años desde que el parque temático fue destruido. Isla Nublar está abandonada y los dinosaurios sobreviven como pueden...",
            actores: "Chris Pratt, Bryce Dallas Howard, Rafe Spall",
            imagen: "Imagenes Películas/Imagen2.jpg",

        },

        "jurassic-dominio": {
            titulo: "Jurassic World: Dominio",
            sinopsis: "Cuatro años después de la caída de Isla Nublar, los dinosaurios viven entre los humanos. En medio del caos, Owen y Claire luchan por rescatar a Maisie, mientras una nueva amenaza genética pone en riesgo el futuro del planeta. Viejos y nuevos héroes se unen para enfrentar el mayor peligro hasta ahora.",
            actores: "Chris Pratt, Bryce Dallas Howard, Laura Dern, Sam Neill, Jeff Goldblum",
            imagen: "Imagenes Películas/Imagen3.jpg"
        },

        "avatar": {
            titulo: "Avatar",
            sinopsis: "En el año 2154, un exmarine es enviado a Pandora y se ve envuelto en un conflicto entre humanos y los Na'vi...",
            actores: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
            imagen: "Imagenes Películas/Imagen10.jpg"
        },

        "avatar2": {
            titulo: "Avatar 2, El camino del agua",
            sinopsis: "Jake Sully y Neytiri han formado una familia, pero deben abandonar su hogar y explorar nuevas regiones de Pandora cuando una vieja amenaza regresa.",
            actores: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            imagen: "Imagenes Películas/Imagen11.jpg"
        },


        "antman": {
            titulo: "Ant-Man and the Wasp: Quantumania",
            sinopsis: "Scott Lang y Hope van al Reino Cuántico con su familia, donde enfrentan a Kang, un poderoso enemigo con el control del tiempo.",
            actores: "Paul Rudd, Evangeline Lilly, Jonathan Majors, Michelle Pfeiffer",
            imagen: "Imagenes Películas/Imagen12.jpg"
        },

        "endgame": {
            titulo: "Avengers: Endgame",
            sinopsis: "Después del chasquido de Thanos, los Vengadores restantes intentan revertir la catástrofe con un arriesgado viaje en el tiempo.",
            actores: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth",
            imagen: "Imagenes Películas/imagen13.png"
        },

        "titanes": {
            titulo: "Titanes del Pacífico",
            sinopsis: "La humanidad lucha contra monstruos gigantes usando robots llamados Jaegers, pilotados por dos personas conectadas mentalmente.",
            actores: "Charlie Hunnam, Idris Elba, Rinko Kikuchi, Charlie Day",
            imagen: "Imagenes Películas/imagen34.webp"
        },

        "mickey": {
            titulo: "Mickey 17",
            sinopsis: "Mickey 17 es una película de ciencia ficción dirigida por Bong Joon Ho, basada en la novela Mickey7 de Edward Ashton. La historia sigue a Mickey Barnes (Robert Pattinson), quien trabaja como 'prescindible' en una misión de colonización, sabiendo que será reemplazado por clones. Cuando uno de estos clones se activa sin que él haya muerto, enfrenta un dilema sobre su identidad.",
            actores: "Robert Pattinson, Naomi Ackie, Steven Yeun, Mark Ruffalo y Toni Collette.",
            imagen: "Imagenes Películas/imagen35.jpg"
        },

        "topgun": {
            titulo: "Top Gun",
            sinopsis: "Pete 'Maverick' Mitchell (Tom Cruise) es un piloto de la Marina de los EE.UU. que, junto a su compañero Goose (Anthony Edwards), se dirige a la escuela de élite Top Gun para entrenar a los mejores pilotos de combate. A lo largo de la historia, Maverick se enfrenta a su rivalidad con Iceman (Val Kilmer) y a la dolorosa pérdida de su amigo Goose",
            actores: "Tom Cruise, Kelly McGillis, Val Kilmer, Anthony Edwards.",
            imagen: "Imagenes Películas/imagen4.jpg"
        },

        "maverick": {
            titulo: "Top Gun: Maverick",
            sinopsis: "Después de más de 30 años de servicio, Pete 'Maverick' Mitchell entrena a una nueva generación de pilotos para una misión imposible.",
            actores: "Tom Cruise, Miles Teller, Jennifer Connelly, Jon Hamm",
            imagen: "Imagenes Películas/imagen5.jpg"
        },

        "justiciero": {
            titulo: "El Justiciero Capítulo Final",
            sinopsis: "Robert McCall (Denzel Washington) es un hombre tranquilo con un pasado misterioso, que se ha retirado de su vida como agente encubierto. Vive una vida normal, pero cuando una joven llamada Teri (Chloë Grace Moretz) cae bajo el control de un grupo criminal ruso, McCall decide usar sus habilidades para hacer justicia y protegerla, enfrentándose a un mundo de corrupción y violencia.",
            actores: "Denzel Washington, Chloë Grace Moretz, Marton Csokas, David Harbour.",
            imagen: "Imagenes Películas/imagen6.jpg"
        },

        "johnwick": {
            titulo: "John Wick 4",
            sinopsis: "John Wick lucha contra la Alta Mesa mientras descubre un camino para derrotarla, enfrentándose a enemigos por todo el mundo.",
            actores: "Keanu Reeves, Donnie Yen, Bill Skarsgård, Laurence Fishburne",
            imagen: "Imagenes Películas/imagen7.jpg"
        },

        "furiosos": {
            titulo: "Rápidos y Furiosos X",
            sinopsis: "Dom Toretto y su familia enfrentan a un nuevo enemigo con lazos del pasado y con sed de venganza.",
            actores: "Vin Diesel, Jason Momoa, Michelle Rodriguez, Tyrese Gibson",
            imagen: "Imagenes Películas/imagen8.jpg"
        },

        "novocaine": {
            titulo: "Novocaine",
            sinopsis: "Frank (Steve Martin), un dentista de Los Ángeles, se ve envuelto en un embrollo cuando una paciente lo implica en un crimen. A medida que su vida se complica, debe enfrentar los efectos de sus propias decisiones.",
            actores: "Steve Martin, Helena Bonham Carter, Laura Dern",
            imagen: "Imagenes Películas/imagen36.webp"
        },
        "indestructibles": {
            titulo: "Los Indestructibles 3",
            sinopsis: "Los mercenarios se enfrentan a un viejo compañero, Conrad Stonebanks, quien se ha convertido en un criminal despiadado. Barney Ross y su equipo de élite deben reclutar a un grupo más joven para derrotarlo.",
            actores: "Sylvester Stallone, Jason Statham, Antonio Banderas, Mel Gibson",
            imagen: "Imagenes Películas/imagen37.jpg"
        },
        "busqueda3": {
            titulo: "Búsqueda Implacable 3",
            sinopsis: "Bryan Mills, un ex-agente de la CIA, es acusado injustamente de asesinar a su esposa, Lenore. Ahora, debe utilizar sus habilidades para escapar de la persecución de la policía y encontrar al verdadero culpable.",
            actores: "Liam Neeson, Forest Whitaker, Maggie Grace",
            imagen: "Imagenes Películas/imagen9.jpg"
        },
        "comoniños": {
            titulo: "Son Como Niños 2",
            sinopsis: "Lenny (Adam Sandler) regresa a su ciudad natal con su familia. Juntos, se reencuentran con sus viejos amigos y participan en una serie de situaciones cómicas y locas.",
            actores: "Adam Sandler, Kevin James, Chris Rock, David Spade",
            imagen: "Imagenes Películas/imagen14.jpg"
        },
        "primos": {
            titulo: "Primos",
            sinopsis: "Un grupo de primos se reúne para un evento familiar. Entre risas y tensiones, se enfrentan a situaciones que los hacen reconsiderar sus relaciones y la vida misma.",
            actores: "Quim Gutiérrez, Raúl Arévalo, Clara Lago",
            imagen: "Imagenes Películas/imagen15.jpg"
        },
        "chiquito": {
            titulo: "Chiquito Pero Peligroso",
            sinopsis: "Un ladrón de bancos escapa de la prisión y se esconde en el hogar de una pareja, haciéndose pasar por un bebé recién adoptado. La confusión crea una serie de situaciones cómicas.",
            actores: "Marlon Wayans, Shawn Wayans, Kerry Washington",
            imagen: "Imagenes Películas/imagen16.jpg"
        },
        "abuela": {
            titulo: "Esta Abuela Es Mi Padre",
            sinopsis: "Una editora canadiense (Sandra Bullock) finge casarse con su asistente (Ryan Reynolds) para evitar ser deportada. Juntos, deben convencer a su familia y amigos en Alaska de que realmente están enamorados.",
            actores: "Sandra Bullock, Ryan Reynolds, Betty White",
            imagen: "Imagenes Películas/imagen17.jpg"
        },
        "devoluciones": {
            titulo: "No se Aceptan Devoluciones",
            sinopsis: "Un hombre recibe a su hija inesperadamente, luego de que la madre la dejara en su puerta. A lo largo de los años, se forma un vínculo profundo entre ellos.",
            actores: "Eugenio Derbez, Jessica Lindsey, Loreto Peralta",
            imagen: "Imagenes Películas/imagen18.jpg"
        },
        "freeguy": {
            titulo: "Free Guy",
            sinopsis: "Guy (Ryan Reynolds) es un personaje de fondo en un videojuego de mundo abierto, hasta que se da cuenta de que su vida es parte de un juego y decide tomar el control para salvar su mundo.",
            actores: "Ryan Reynolds, Jodie Comer, Taika Waititi",
            imagen: "Imagenes Películas/imagen19.jpg"
        },
        "boda": {
            titulo: "Hasta que la Boda Nos Separe",
            sinopsis: "Un hombre con una vida aparentemente estable se ve envuelto en situaciones imprevistas cuando la boda de su hija se complica por un problema de comunicación y decisiones.",
            actores: "Belén Rueda, José Coronado, Paco León",
            imagen: "Imagenes Películas/imagen38.jpg"
        },
        "hombre": {
            titulo: "Hazlo como hombre",
            sinopsis: "Tres amigos de toda la vida deben enfrentar sus propias inseguridades y prejuicios cuando uno de ellos decide compartir un secreto importante sobre su vida personal.",
            actores: "Mauricio Ochmann, Humberto Busto, Aislinn Derbez",
            imagen: "Imagenes Películas/imagen39.jpg"
        },
        "posesion": {
            titulo: "La posesión de Verónica",
            sinopsis: "Verónica, una joven madre, lucha por salvar a su hija, quien está poseída por un demonio, mientras enfrenta situaciones aterradoras y luchas internas con la verdad.",
            actores: "Sandra Escacena, Leticia Dolera, Consuelo Trujillo",
            imagen: "Imagenes Películas/imagen20.jpg"
        },
        "monja": {
            titulo: "La Monja",
            sinopsis: "Un sacerdote y una novicia investigan el suicidio de una monja en un convento en Rumanía, enfrentándose a una presencia demoníaca que amenaza con destruirlos.",
            actores: "Taissa Farmiga, Demián Bichir, Jonas Bloquet",
            imagen: "Imagenes Películas/imagen21.jpg"
        },
        "llorona": {
            titulo: "La Llorona",
            sinopsis: "En Guatemala, una madre acusada de un terrible crimen es perseguida por el espíritu vengativo de La Llorona, quien amenaza con llevarse a sus hijos.",
            actores: "María Mercedes Coroy, Sabrina de la Hoz, Juan Pablo Olyslager",
            imagen: "Imagenes Películas/imagen22.jpg"
        },
        "profecia": {
            titulo: "La Primera Profecía",
            sinopsis: "Un joven descubre un antiguo libro que predice el futuro y desencadena una serie de eventos que alteran su destino y el de quienes lo rodean.",
            actores: "Shane West, Ellen Muth, Henry Thomas",
            imagen: "Imagenes Películas/imagen23.jpg"
        },
        "demonio": {
            titulo: "La Noche del Demonio",
            sinopsis: "Una familia lucha por proteger a su hijo de una entidad demoníaca que ha poseído su cuerpo, mientras descubren oscuros secretos del pasado.",
            actores: "Patrick Wilson, Rose Byrne, Lin Shaye",
            imagen: "Imagenes Películas/imagen24.png"
        },
        "solos": {
            titulo: "No estamos solos",
            sinopsis: "Un grupo de personas descubre que su hogar está siendo invadido por presencias extrañas, y juntos deben enfrentarlas para salvar sus vidas.",
            actores: "Macarena Gómez, Pepón Nieto, Andrés Gertrúdix",
            imagen: "Imagenes Películas/imagen26.jpg"
        },
        "luz": {
            titulo: "La luz del diablo",
            sinopsis: "Un hombre se ve atrapado por una serie de extraños sucesos que desafían la realidad, mientras una entidad sobrenatural parece ser la fuente de sus problemas.",
            actores: "Brad Dourif, Julianne Moore, William Hurt",
            imagen: "Imagenes Películas/imagen40.jpg"
        },
        "malasaña": {
            titulo: "Malasaña 32",
            sinopsis: "Una familia se muda a un nuevo apartamento en Madrid, pero descubren que la vivienda está plagada por espíritus y secretos oscuros del pasado.",
            actores: "Begoña Vargas, Asier Etxeandía, Concha Velasco",
            imagen: "Imagenes Películas/imagen41.jpg"
        },
        "tiempo": {
            titulo: "Cuestión de Tiempo",
            sinopsis: "Un joven descubre que tiene la habilidad de viajar en el tiempo y usa su poder para mejorar su vida y relaciones, especialmente con su novia.",
            actores: "Domhnall Gleeson, Rachel McAdams, Bill Nighy",
            imagen: "Imagenes Películas/imagen27.jpg"
        },
        "imprevistos": {
            titulo: "Los imprevistos del amor",
            sinopsis: "Una joven lucha por encontrar el equilibrio entre su vida profesional y personal, mientras se enfrenta a un amor inesperado que cambiará su futuro.",
            actores: "Ludivine Sagnier, François Cluzet",
            imagen: "Imagenes Películas/imagen28.jpg"
        },
        "tarde": {
            titulo: "Los imprevistos del amor",
            sinopsis: "Una joven lucha por encontrar el equilibrio entre su vida profesional y personal, mientras se enfrenta a un amor inesperado que cambiará su futuro.",
            actores: "Ludivine Sagnier, François Cluzet",
            imagen: "Imagenes Películas/imagen29.jpg"
        },
        "antesdeti": {
            titulo: "Yo antes de ti",
            sinopsis: "Una joven descubre el poder del amor mientras cuida a un hombre que se encuentra en silla de ruedas debido a un accidente, enfrentándose a retos emocionales y personales.",
            actores: "Emilia Clarke, Sam Claflin, Charles Dance",
            imagen: "Imagenes Películas/imagen30.jpg"
        },
        "cuando": {
            titulo: "Cuando te Encuentre",
            sinopsis: "Un joven regresa a su ciudad natal y se reencuentra con su primer amor, solo para descubrir que sus vidas han cambiado por completo.",
            actores: "Zac Efron, Taylor Schilling, Blythe Danner",
            imagen: "Imagenes Películas/imagen31.jpg"
        },

        "lomejor": {
            titulo: "Lo mejor de mi",
            sinopsis: "Un amor de juventud que se reaviva años después, cuando los dos protagonistas se reencuentran, confrontando su pasado y las decisiones que tomaron en su vida.",
            actores: "Michelle Monaghan, James Marsden, Liana Liberato",
            imagen: "Imagenes Películas/imagen32.jpg"
        },

        "imposible": {
            titulo: "Un amor imposible",
            sinopsis: "Un joven y una chica de diferentes orígenes se enamoran, pero su amor se ve amenazado por las diferencias sociales y familiares que los separan.",
            actores: "María Valverde, Álex González, Natalia de Molina",
            imagen: "Imagenes Películas/imagen42.webp"
        },

        "cadadia": {
            titulo: "Cada día",
            sinopsis: "Un joven despierta cada día en un cuerpo diferente, pero su amor por una chica nunca cambia. Juntos, deben enfrentarse a la incertidumbre de este fenómeno para intentar encontrar una solución.",
            actores: "Angourie Rice, Justice Smith, María Bello",
            imagen: "Imagenes Películas/imagen43.jpg"
        }



    };

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const datos = peliculas[id];
    const contenedor = document.getElementById("detalle-pelicula");

    if (datos) {
        document.body.style.background = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${datos.imagen}') repeat center center `;


        contenedor.innerHTML = `
            <div style="width: 100%; text-align: left; margin-bottom: 20px;">
                <a href="Index.html" class="btn-1" style="font-size: 16px; padding: 5px 15px; display: inline-block; width: auto;">Volver</a>
            </div>
            <img src="${datos.imagen}" alt="${datos.titulo}" />
            <div class="detalle-info">
                <h1>${datos.titulo}</h1>
                <p><strong>Sinopsis:</strong> ${datos.sinopsis}</p>
                <p><strong>Actores:</strong> ${datos.actores}</p>

            </div>
            
                <div class="comentarios-container container">
                    <h2>Comentarios</h2>
                    <div id="lista-comentarios"></div>
                    <div class="formulario-comentario">
                    <h3>Deja tu comentario:</h3>
                        <form id="form-comentario">
                            <textarea id="nuevo-comentario" placeholder="Escribe tu comentario aquí"></textarea>
                            <button type="submit" class="btn-1">Enviar Comentario</button>
                        </form>
                    </div>
                </div>
                 `;


        const form = document.getElementById("form-comentario");
        const lista = document.getElementById("lista-comentarios");

        function mostrarComentarios() {
            const comentariosGuardados = JSON.parse(localStorage.getItem(`comentarios-${id}`)) || [];
            lista.innerHTML = "";
            comentariosGuardados.forEach(comentario => {
                const div = document.createElement("div");
                div.className = "comentario";
                div.textContent = comentario;
                lista.appendChild(div);
            });
        }

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const nuevoComentario = document.getElementById("nuevo-comentario").value.trim();
            if (nuevoComentario) {
                const comentariosGuardados = JSON.parse(localStorage.getItem(`comentarios-${id}`)) || [];
                comentariosGuardados.push(nuevoComentario);
                localStorage.setItem(`comentarios-${id}`, JSON.stringify(comentariosGuardados));
                mostrarComentarios();
                form.reset();
            }
        });

        mostrarComentarios();
    } else {
        contenedor.innerHTML = `<p>Película no encontrada.</p>`;
    }
});