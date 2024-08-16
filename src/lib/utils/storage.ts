
export function getCookie(name:string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const poppedValue = parts.pop();
        if (poppedValue) {
            return poppedValue.split(';').shift();
        }
    }
    return null;
}

export function setCookie(name:string, value:any, days = 7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

export const updateLoading = () => {
    const loadingValue = getCookie('loading');
    console.log('Updating',loadingValue);
    setCookie('loading',loadingValue === 'true');
};

export const initializeLoadingCookie = (value:any) => {
    setCookie('loading', value);
};
