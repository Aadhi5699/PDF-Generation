  async ImageAsBase64(url: string): Promise<string | null> {
    try {
        const response = await fetch(url, { mode: 'cors' });
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                //console.log(`Image successfully converted to base64: ${url}`);
                resolve(reader.result as string);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error(`Failed to fetch or convert image at ${url} due to CORS: ${error}`);
        return null;
    }
}
