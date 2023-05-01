export const getRootDirectory = () => {
    const hostname = window.location.hostname;
    const localhostRoot = "http://localhost/BarataMadyaXI/";
    const productionRoot = "/";
    return hostname === "localhost" ? localhostRoot : productionRoot;
};

export default {
    getRootDirectory,
};