export default class RestoService {
    _apiBase = "http://localhost:3000";
    getResources = async (url) => {
        const promise = await fetch(this._apiBase + url);

        if (!promise.ok){
            throw new Error(`something went wrong, status is ${promise.status}`);
        }

        return await promise.json();
    }
    async getMenuItems() {
        return await this.getResources("/menu/");
    }
}