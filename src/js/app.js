import '../scss/app.scss';



const btnArr = document.querySelectorAll('.btn');
const favoriteServers = new Set();

for (let btn of btnArr) {
    btn.addEventListener('click', () => {
        const serverName = btn.dataset.name;
        let toast;

        if (favoriteServers.has(serverName)) {
            favoriteServers.delete(serverName);

              toast = removeToast(`Le serveur "${serverName}" a été retiré des favoris.`);
            document.body.appendChild(toast);
        } else {
            favoriteServers.add(serverName);

              toast = addToast(`Le serveur "${serverName}" a été marqué comme favori !`);
            document.body.appendChild(toast);
        }
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);

        btn.classList.toggle('active');
        const server = document.querySelector(`[data-name="${serverName}"]`);
        server.classList.toggle('favorite');
    });
}

function addToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast toast-add'; 
    const allToast = document.querySelectorAll('.toast');
    if (allToast.length > 0) {
        toast.style.top = (allToast.length * 30) + 'px';
    }
    toast.textContent = message;
    return toast;
}

function removeToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast toast-remove'
    const allToast = document.querySelectorAll('.toast');
    if (allToast.length > 0) {
        toast.style.top = (allToast.length * 30) + 'px';
    }
    toast.textContent = message;
    return toast;
}

