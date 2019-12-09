// Helper class that will contain generic helper methods for charts
class Helper {

    getRandomColor() {
        let c = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return c;
    };

    getRandomColourList(list) {
        let colorList = [];
        list.forEach(element => colorList.push(this.getRandomColor()));
        return colorList;
    };

    cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    };

    formatDateToString(dateIn) {
        let date = new Date(dateIn);

        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let hour = date.getHours();
        let min = date.getMinutes();

        return (`${year}-${month}-${day} at ${hour}:${min}`);
    }

}

export default Helper

