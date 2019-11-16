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

}

export default Helper

