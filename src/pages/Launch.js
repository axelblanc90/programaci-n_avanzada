
import getData from '../utils/getData';

const Launch = async () => {
    // Obtener el id de la URL hash
    const id = location.hash.split('/')[2];
    const launches = await getData();
    const launch = launches.find(item => item.id === id);

    if (!launch) {
        return `<div class="Launch-error">Lanzamiento no encontrado</div>`;
    }

    const failures = launch.failures.length > 0
        ? `<ul>${launch.failures.map(f => `<li>${f.reason}</li>`).join('')}</ul>`
        : '<p>No hubo fallas en el lanzamiento.</p>';

    const view = `
        <div class="Launch-detail">
            <img src="${launch.links.patch.large}" alt="${launch.name}" />
            <h2>${launch.name}</h2>
            <p><strong>Detalle:</strong> ${launch.details || 'Sin información.'}</p>
            <p><strong>Número de vuelo:</strong> ${launch.flight_number}</p>
            <p><strong>Fecha y hora de despegue:</strong> ${new Date(launch.date_utc).toLocaleString()}</p>
            <div>
                <strong>Fallas:</strong>
                ${failures}
            </div>
        </div>
    `;

    return view;
};

export default Launch;