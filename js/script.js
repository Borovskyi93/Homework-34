const postArray = ['Investor', 'Manager', 'Assistant', 'Worker'];

const investorShow = (link, postRef) => {
    console.log(`${link}:`, postRef);
    getFile(postArray[1], managerShow);
};

const managerShow = (link, postRef) => {
    console.log(`${link}:`, postRef);
    getFile(postArray[2], assistantShow);
};

const assistantShow = (link, postRef) => {
    console.log(`${link}:`, postRef);
    getFile(postArray[3], workerShow);
};

const workerShow = (link, postRef) => console.log(`${link}:`, postRef);


function getFile (link, investorShow) {
    const xhrRef = new XMLHttpRequest();

    xhrRef.open('GET', `./files/${link}.json`);
    xhrRef.send();

    xhrRef.addEventListener('readystatechange', () => {
        if (xhrRef.readyState === 4) {
            const isStatus = xhrRef.status >= 200 && xhrRef.status < 400;
            const postRef = isStatus ? JSON.parse(xhrRef.response) : [];
            
            investorShow(link, postRef);
        }
    })
}

getFile(postArray[0], investorShow);